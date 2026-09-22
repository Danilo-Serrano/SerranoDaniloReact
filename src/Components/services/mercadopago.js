import { initMercadoPago } from "@mercadopago/sdk-react";

// La Public Key es pública por diseño. El Access Token vive solo en las Cloud Functions.
const publicKey = import.meta.env.VITE_MP_PUBLIC_KEY;
const functionsBaseUrl = (import.meta.env.VITE_FUNCTIONS_BASE_URL || "").replace(/\/$/, "");

export const mpConfigurado = Boolean(publicKey) && !publicKey.includes("xxxx") && Boolean(functionsBaseUrl);

if (mpConfigurado) {
    initMercadoPago(publicKey, { locale: "es-AR" });
}

const llamarFuncion = async (nombre, opciones) => {
    const respuesta = await fetch(`${functionsBaseUrl}/${nombre}`, opciones);
    const datos = await respuesta.json().catch(() => ({}));
    if (!respuesta.ok) {
        const error = new Error(datos.error || "No pudimos completar la operación.");
        error.estado = datos.estado;
        throw error;
    }
    return datos;
};

const postJson = (nombre, cuerpo) =>
    llamarFuncion(nombre, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cuerpo),
    });

// Solo se envían ids y cantidades: el precio lo determina el servidor.
const pedido = (cliente, carrito) => ({
    cliente,
    items: carrito.map((prod) => ({ id: prod.item.id, cantidad: prod.cantidad })),
});

// Botón de Mercado Pago: crea la orden y la preferencia. -> { preferenceId, ordenId }
export const crearPreferencia = (cliente, carrito) =>
    postJson("crearPreferencia", pedido(cliente, carrito));

// QR dinámico: crea la orden y devuelve el código. -> { ordenId, qrData, expiraEn }
// expiraEn se calcula con el reloj del navegador a partir de la duración que informa el servidor.
export const crearOrdenQr = async (cliente, carrito) => {
    const { ordenId, qrData, venceEnMs } = await postJson("crearOrdenQr", pedido(cliente, carrito));
    return { ordenId, qrData, expiraEn: Date.now() + venceEnMs };
};

// -> { estado }  (pendiente | pagada | rechazada | sin_stock | monto_inconsistente)
export const consultarEstadoOrden = (ordenId) =>
    llamarFuncion(`estadoOrden?id=${encodeURIComponent(ordenId)}`);

export const cancelarOrdenQr = (ordenId) => postJson("cancelarOrdenQr", { ordenId });
