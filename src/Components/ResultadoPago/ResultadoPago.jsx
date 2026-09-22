import React, { useContext, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CarritoContext } from '../Context/CarritoContext';
import "../ItemListContainer/ItemListContainer.css";
import "../Context/Carrito.css";

const MENSAJES = {
    exito: {
        etiqueta: "Aprobado",
        titulo: "Pago aprobado",
        detalle: "Recibimos tu pago. Estamos preparando tu pedido.",
    },
    pendiente: {
        etiqueta: "Pendiente",
        titulo: "Tu pago está pendiente",
        detalle: "Apenas Mercado Pago lo acredite confirmaremos tu pedido.",
    },
    error: {
        etiqueta: "Sin cobro",
        titulo: "No pudimos procesar el pago",
        detalle: "No se realizó ningún cobro. Podés volver al carrito e intentarlo de nuevo.",
    },
};

// Página a la que Mercado Pago devuelve al comprador (back_urls).
// Es solo informativa: la confirmación real del pago llega al webhook del backend.
const ResultadoPago = ({ estado }) => {
    const { vaciarCarrito } = useContext(CarritoContext);
    const [params] = useSearchParams();
    const yaVaciado = useRef(false);

    const { etiqueta, titulo, detalle } = MENSAJES[estado];
    const ordenId = params.get("external_reference");
    const pagoId = params.get("payment_id");

    // El carrito se vacía recién acá, cuando el pago se aprobó o quedó pendiente.
    useEffect(() => {
        if (estado !== "error" && !yaVaciado.current) {
            yaVaciado.current = true;
            vaciarCarrito();
        }
    }, [estado, vaciarCarrito]);

    return (
        <section className="pg">
            <header className="pg-encabezado">
                <h2 className="pg-titulo">{titulo}</h2>
                <p className="pg-subtitulo">● {etiqueta}</p>
            </header>

            <div className="cr-resultado">
                <p className="cr-resultado__texto">{detalle}</p>

                {(ordenId || pagoId) && (
                    <dl className="cr-resultado__datos">
                        {ordenId && <div><dt>N° de orden</dt><dd>{ordenId}</dd></div>}
                        {pagoId && <div><dt>ID de pago</dt><dd>{pagoId}</dd></div>}
                    </dl>
                )}

                <Link to={estado === "error" ? "/carrito" : "/"} className="cr-btn cr-btn--principal">
                    {estado === "error" ? "Volver al carrito" : "Seguir comprando"}
                </Link>
            </div>
        </section>
    );
};

export default ResultadoPago;
