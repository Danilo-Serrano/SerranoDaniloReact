const { setGlobalOptions } = require("firebase-functions");
const { onRequest } = require("firebase-functions/https");
const { defineSecret, defineString } = require("firebase-functions/params");
const logger = require("firebase-functions/logger");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const {
  MercadoPagoConfig,
  Preference,
  Payment,
  Order,
  WebhookSignatureValidator,
} = require("mercadopago");

initializeApp();
const db = getFirestore();

// Control de costos: máximo de contenedores simultáneos por función.
setGlobalOptions({ maxInstances: 10 });

// ---------------------------------------------------------------------------
// Configuración (nunca hardcodear credenciales)
//  - Secretos:  Access Token y clave de firma del webhook de Mercado Pago.
//               Producción: `firebase functions:secrets:set NOMBRE`
//               Local:      functions/.secret.local
//  - Strings:   URLs públicas. Producción: functions/.env
//               Local:      functions/.env.local (pisa a .env en el emulador)
// ---------------------------------------------------------------------------
const MP_ACCESS_TOKEN = defineSecret("MP_ACCESS_TOKEN");
const MP_WEBHOOK_SECRET = defineSecret("MP_WEBHOOK_SECRET");
const APP_URL = defineString("APP_URL"); // URL pública del frontend (sin "/" final)
const WEBHOOK_URL = defineString("WEBHOOK_URL"); // URL pública de la función mpWebhook
const QR_POS_ID = defineString("QR_POS_ID"); // external_id de la caja (POS) creada en Mercado Pago

const MAX_ITEMS = 50;
const MONEDA = "ARS";
const QR_EXPIRACION = "PT10M"; // vigencia del QR (ISO 8601); MP usa 15 min si no se indica
const QR_EXPIRACION_MS = 10 * 60 * 1000;

class PedidoError extends Error {
  constructor(message, status = 400) {
    super(message);
    this.status = status;
  }
}

const mpClient = () =>
  new MercadoPagoConfig({ accessToken: MP_ACCESS_TOKEN.value() });

const esTextoValido = (v, max = 100) =>
  typeof v === "string" && v.trim().length > 0 && v.length <= max;

// ---------------------------------------------------------------------------
// 1) crearPreferencia
//    Recibe { cliente: {nombre, apellido, telefono}, items: [{id, cantidad}] }.
//    Los precios se leen de Firestore: lo que mande el navegador se ignora.
// ---------------------------------------------------------------------------
function validarPedido(body) {
  const { cliente, items } = body || {};

  if (
    !cliente ||
    !esTextoValido(cliente.nombre) ||
    !esTextoValido(cliente.apellido) ||
    !esTextoValido(cliente.telefono, 30)
  ) {
    throw new PedidoError("Datos del cliente incompletos o inválidos.");
  }
  if (!Array.isArray(items) || items.length === 0 || items.length > MAX_ITEMS) {
    throw new PedidoError("El carrito está vacío o es demasiado grande.");
  }

  // Unificamos ids repetidos sumando cantidades.
  const cantidades = new Map();
  for (const it of items) {
    if (
      !it ||
      !esTextoValido(it.id, 200) ||
      it.id.includes("/") ||
      !Number.isInteger(it.cantidad) ||
      it.cantidad < 1
    ) {
      throw new PedidoError("Hay productos inválidos en el carrito.");
    }
    cantidades.set(it.id, (cantidades.get(it.id) || 0) + it.cantidad);
  }

  return {
    cliente: {
      nombre: cliente.nombre.trim(),
      apellido: cliente.apellido.trim(),
      telefono: cliente.telefono.trim(),
    },
    cantidades,
  };
}

// Valida el pedido y arma los ítems con precio y stock reales desde Firestore.
// Lo usan tanto el botón de Mercado Pago como el QR.
async function armarPedido(body) {
  const { cliente, cantidades } = validarPedido(body);

  const refs = [...cantidades.keys()].map((id) =>
    db.collection("productos").doc(id),
  );
  const snaps = await db.getAll(...refs);

  const items = snaps.map((snap) => {
    const cantidad = cantidades.get(snap.id);
    if (!snap.exists) {
      throw new PedidoError("Un producto del carrito ya no existe.", 409);
    }
    const { nombre, precio, stock } = snap.data();
    if (!Number.isFinite(precio) || precio <= 0) {
      throw new PedidoError(`El producto "${nombre}" no tiene precio válido.`, 409);
    }
    if (!Number.isFinite(stock) || stock < cantidad) {
      throw new PedidoError(
        `Stock insuficiente para "${nombre}". Disponible: ${stock ?? 0}`,
        409,
      );
    }
    return { id: snap.id, nombre, precio, cantidad };
  });

  const total = items.reduce((acc, i) => acc + i.precio * i.cantidad, 0);
  return { cliente, items, total };
}

const responderError = (res, error, mensajeGenerico) => {
  if (error instanceof PedidoError) {
    return res.status(error.status).json({ error: error.message });
  }
  logger.error(mensajeGenerico, error);
  return res.status(500).json({ error: mensajeGenerico });
};

exports.crearPreferencia = onRequest(
  { cors: true, secrets: [MP_ACCESS_TOKEN] },
  async (req, res) => {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Método no permitido." });
    }

    try {
      const { cliente, items, total } = await armarPedido(req.body);

      // Reservamos el ID de la orden para usarlo como external_reference.
      const ordenRef = db.collection("ordenes").doc();

      const appUrl = APP_URL.value().replace(/\/$/, "");
      const body = {
        items: items.map((i) => ({
          id: i.id,
          title: i.nombre,
          quantity: i.cantidad,
          unit_price: i.precio,
          currency_id: MONEDA,
        })),
        payer: { name: cliente.nombre, surname: cliente.apellido },
        external_reference: ordenRef.id,
        notification_url: WEBHOOK_URL.value(),
        statement_descriptor: "GAMERZONE",
        back_urls: {
          success: `${appUrl}/pago/exito`,
          pending: `${appUrl}/pago/pendiente`,
          failure: `${appUrl}/pago/error`,
        },
      };
      // Mercado Pago rechaza auto_return si las back_urls no son HTTPS.
      if (appUrl.startsWith("https://")) body.auto_return = "approved";

      const preferencia = await new Preference(mpClient()).create({ body });

      await ordenRef.set({
        cliente,
        items,
        total,
        estado: "pendiente", // pendiente -> pagada | rechazada | sin_stock | monto_inconsistente
        medioPago: "checkout_pro",
        preferenceId: preferencia.id,
        fecha: FieldValue.serverTimestamp(),
      });

      return res.json({ preferenceId: preferencia.id, ordenId: ordenRef.id });
    } catch (error) {
      return responderError(res, error, "No pudimos iniciar el pago. Intentá nuevamente.");
    }
  },
);

// ---------------------------------------------------------------------------
// 1b) QR dinámico (API de Orders)
//     crearOrdenQr  -> crea la orden y devuelve el texto EMVCo para dibujar el QR
//     estadoOrden   -> el navegador consulta si ya se pagó (no puede leer Firestore)
//     cancelarOrdenQr -> el comprador desiste antes de pagar
// ---------------------------------------------------------------------------
const dosDecimales = (n) => n.toFixed(2);

exports.crearOrdenQr = onRequest(
  { cors: true, secrets: [MP_ACCESS_TOKEN] },
  async (req, res) => {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Método no permitido." });
    }

    try {
      const { cliente, items, total } = await armarPedido(req.body);
      const ordenRef = db.collection("ordenes").doc();

      const orden = await new Order(mpClient()).create({
        body: {
          type: "qr",
          total_amount: dosDecimales(total),
          description: "Compra en GamerZone",
          external_reference: ordenRef.id,
          expiration_time: QR_EXPIRACION,
          config: {
            qr: { external_pos_id: QR_POS_ID.value(), mode: "dynamic" },
          },
          transactions: { payments: [{ amount: dosDecimales(total) }] },
          items: items.map((i) => ({
            title: i.nombre,
            unit_price: dosDecimales(i.precio),
            quantity: i.cantidad,
            unit_measure: "unit",
          })),
        },
        // Misma orden = misma clave: un reintento no duplica la orden en MP.
        requestOptions: { idempotencyKey: ordenRef.id },
      });

      const qrData = orden.type_response?.qr_data;
      if (!orden.id || !qrData) {
        throw new Error("Mercado Pago no devolvió el código QR.");
      }

      await ordenRef.set({
        cliente,
        items,
        total,
        estado: "pendiente",
        medioPago: "qr",
        mpOrderId: orden.id,
        fecha: FieldValue.serverTimestamp(),
      });

      // Se envía la duración (no una hora absoluta) para no depender de que los
      // relojes del servidor y del navegador coincidan.
      return res.json({ ordenId: ordenRef.id, qrData, venceEnMs: QR_EXPIRACION_MS });
    } catch (error) {
      return responderError(res, error, "No pudimos generar el QR. Intentá nuevamente.");
    }
  },
);

// Devuelve solo el estado: la orden guarda datos personales y no se expone.
exports.estadoOrden = onRequest({ cors: true }, async (req, res) => {
  const id = req.query.id;
  if (!esTextoValido(id, 200) || id.includes("/")) {
    return res.status(400).json({ error: "ID inválido." });
  }
  try {
    const snap = await db.collection("ordenes").doc(id).get();
    if (!snap.exists) return res.status(404).json({ error: "Orden inexistente." });
    res.set("Cache-Control", "no-store");
    return res.json({ estado: snap.data().estado });
  } catch (error) {
    return responderError(res, error, "No pudimos consultar la orden.");
  }
});

exports.cancelarOrdenQr = onRequest(
  { cors: true, secrets: [MP_ACCESS_TOKEN] },
  async (req, res) => {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Método no permitido." });
    }
    const id = req.body?.ordenId;
    if (!esTextoValido(id, 200) || id.includes("/")) {
      return res.status(400).json({ error: "ID inválido." });
    }

    try {
      const ordenRef = db.collection("ordenes").doc(id);
      const snap = await ordenRef.get();
      const orden = snap.data();
      if (!snap.exists || orden.medioPago !== "qr") {
        return res.status(404).json({ error: "Orden inexistente." });
      }
      if (orden.estado !== "pendiente") {
        return res.status(409).json({ error: "La orden ya no se puede cancelar.", estado: orden.estado });
      }

      // Si MP rechaza la cancelación (por ejemplo, ya se pagó), dejamos la orden como está:
      // el webhook la marcará como pagada.
      await new Order(mpClient()).cancel({ id: orden.mpOrderId });

      await ordenRef.update({ estado: "rechazada", "pago.status": "cancelled" });
      return res.json({ estado: "rechazada" });
    } catch (error) {
      return responderError(res, error, "No pudimos cancelar el QR. Intentá nuevamente.");
    }
  },
);

// ---------------------------------------------------------------------------
// 2) mpWebhook
//    Mercado Pago avisa acá los cambios de estado:
//      - type "payment": pagos del botón (Checkout Pro)
//      - type "order":   órdenes del QR (API de Orders)
//    Nunca confiamos en el cuerpo de la notificación: con el ID consultamos el
//    recurso a la API de Mercado Pago usando nuestro Access Token.
// ---------------------------------------------------------------------------
function verificarFirma(req) {
  const secret = MP_WEBHOOK_SECRET.value();
  if (!secret) {
    logger.warn("MP_WEBHOOK_SECRET vacío: se omite la validación de firma.");
    return;
  }
  // El ID puede venir en la query (pagos) o en el body (órdenes). MP arma la firma
  // con el ID en minúsculas; los IDs de orden (ORD01...) llegan en mayúsculas.
  const dataId = String(req.query["data.id"] ?? req.body?.data?.id ?? "").toLowerCase();
  WebhookSignatureValidator.validate({
    xSignature: req.get("x-signature"),
    xRequestId: req.get("x-request-id"),
    dataId,
    secret,
    // Sin toleranceSeconds a propósito: un replay es inocuo porque el estado del
    // pago se consulta a la API de MP y el procesamiento es idempotente.
  });
}

const ESTADOS_FINALES = ["pagada", "sin_stock", "monto_inconsistente"];

// Traduce una orden de la API de Orders (QR) a la forma de un pago, para
// reutilizar aplicarPago con la misma lógica de monto, stock e idempotencia.
const ESTADO_ORDEN_A_PAGO = {
  processed: "approved",
  created: "pending",
  action_required: "pending",
  canceled: "cancelled",
  cancelled: "cancelled",
  expired: "cancelled",
  refunded: "cancelled",
  failed: "rejected",
};

function ordenComoPago(orden) {
  return {
    id: orden.id,
    status: ESTADO_ORDEN_A_PAGO[orden.status] ?? "pending",
    status_detail: orden.status_detail,
    external_reference: orden.external_reference,
    transaction_amount: Number(orden.total_paid_amount ?? orden.total_amount),
    currency_id: orden.currency,
  };
}

async function aplicarPago(pago) {
  const ordenId = pago.external_reference;
  if (!ordenId) {
    logger.warn("Pago sin external_reference, se ignora", { pagoId: pago.id });
    return;
  }

  const ordenRef = db.collection("ordenes").doc(String(ordenId));
  const infoPago = {
    id: pago.id,
    status: pago.status,
    statusDetail: pago.status_detail ?? null,
    monto: pago.transaction_amount ?? null,
    actualizado: FieldValue.serverTimestamp(),
  };

  await db.runTransaction(async (t) => {
    const ordenSnap = await t.get(ordenRef);
    if (!ordenSnap.exists) {
      logger.warn("Orden inexistente para el pago", { ordenId, pagoId: pago.id });
      return;
    }
    const orden = ordenSnap.data();

    // Idempotencia: si ya fue procesada, no se descuenta stock dos veces.
    if (ESTADOS_FINALES.includes(orden.estado)) {
      logger.info("Orden ya procesada, se ignora", { ordenId, estado: orden.estado });
      return;
    }

    if (pago.status !== "approved") {
      const estado = ["rejected", "cancelled"].includes(pago.status)
        ? "rechazada"
        : "pendiente";
      t.update(ordenRef, { estado, pago: infoPago });
      return;
    }

    // Pago aprobado: validamos monto y moneda contra lo que calculó el backend.
    if (
      Number(pago.transaction_amount) !== orden.total ||
      pago.currency_id !== MONEDA
    ) {
      logger.error("Monto o moneda no coinciden con la orden", {
        ordenId,
        esperado: orden.total,
        recibido: pago.transaction_amount,
      });
      t.update(ordenRef, { estado: "monto_inconsistente", pago: infoPago });
      return;
    }

    // Todas las lecturas antes de cualquier escritura.
    const productosRefs = orden.items.map((i) =>
      db.collection("productos").doc(i.id),
    );
    const productosSnaps = await t.getAll(...productosRefs);

    const hayStock = productosSnaps.every(
      (snap, idx) => snap.exists && snap.data().stock >= orden.items[idx].cantidad,
    );

    if (!hayStock) {
      // Se cobró pero ya no queda stock: queda marcada para reembolso manual.
      t.update(ordenRef, { estado: "sin_stock", pago: infoPago });
      return;
    }

    productosSnaps.forEach((snap, idx) => {
      t.update(snap.ref, {
        stock: FieldValue.increment(-orden.items[idx].cantidad),
      });
    });
    t.update(ordenRef, { estado: "pagada", pago: infoPago });
  });
}

exports.mpWebhook = onRequest(
  { secrets: [MP_ACCESS_TOKEN, MP_WEBHOOK_SECRET] },
  async (req, res) => {
    if (req.method !== "POST") return res.status(405).send("Método no permitido");

    try {
      verificarFirma(req);
    } catch (error) {
      logger.warn("Firma de webhook inválida", { reason: error.reason });
      return res.status(401).send("Firma inválida");
    }

    const tipo = req.query.type ?? req.query.topic ?? req.body?.type;
    const recursoId = req.query["data.id"] ?? req.body?.data?.id ?? req.query.id;

    // Solo nos interesan pagos y órdenes QR; el resto se confirma para que no reintente.
    if (!["payment", "order"].includes(tipo) || !recursoId) {
      return res.status(200).send("OK");
    }

    try {
      const pago =
        tipo === "order"
          ? ordenComoPago(await new Order(mpClient()).get({ id: recursoId }))
          : await new Payment(mpClient()).get({ id: recursoId });
      await aplicarPago(pago);
      return res.status(200).send("OK");
    } catch (error) {
      // Recursos de prueba del panel de MP (ID ficticio): no tiene sentido reintentar.
      if (error.status === 404) {
        logger.warn("Recurso no encontrado en Mercado Pago", { tipo, recursoId });
        return res.status(200).send("OK");
      }
      logger.error("mpWebhook falló", error);
      return res.status(500).send("Error"); // MP reintenta
    }
  },
);
