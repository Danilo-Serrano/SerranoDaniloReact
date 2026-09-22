import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../Context/CarritoContext.jsx';
import Formulario from '../Formulario/Formulario';
import "../ItemListContainer/ItemListContainer.css";
import "../Context/Carrito.css";

const Carrito = () => {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const { carrito, vaciarCarrito, eliminarProducto, cantidadTotal } = useContext(CarritoContext);

    // Cálculo del total
    const calcularTotal = carrito.reduce((acc, prod) => acc + prod.item.precio * prod.cantidad, 0);

    const handleRealizarCompra = () => {
        setMostrarFormulario(true);
    };

    // Formateador de moneda
    const formatoPrecio = (valor) => {
        return new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS',
            maximumFractionDigits: 0
        }).format(valor);
    };

    return (
        <section className="pg">
            <header className="pg-encabezado">
                <h2 className="pg-titulo">Carrito</h2>
                {carrito.length > 0 && (
                    <p className="pg-subtitulo">
                        {carrito.length} {carrito.length === 1 ? "producto" : "productos"}
                    </p>
                )}
            </header>

            {carrito.length === 0 ? (
                <div className="cr-vacio">
                    <p className="cr-vacio__titulo">Tu carrito está vacío</p>
                    <p className="cr-vacio__texto">Todavía no agregaste productos.</p>
                    <Link to="/" className="cr-btn cr-btn--principal">
                        Ver productos
                    </Link>
                </div>
            ) : (
                <div className="cr-cuerpo">
                    <ul className="cr-lista">
                        {carrito.map((prod) => (
                            <li key={prod.item.id} className="cr-fila">
                                <div className="cr-fila__info">
                                    <p className="cr-nombre">{prod.item.nombre}</p>
                                    <p className="cr-detalle">{prod.cantidad} × {formatoPrecio(prod.item.precio)}</p>
                                </div>
                                <p className="cr-subtotal">{formatoPrecio(prod.item.precio * prod.cantidad)}</p>
                                <button
                                    type="button"
                                    className="cr-quitar"
                                    onClick={() => eliminarProducto(prod.item.id)}
                                    aria-label={`Quitar ${prod.item.nombre} del carrito`}
                                >
                                    Quitar
                                </button>
                            </li>
                        ))}
                    </ul>

                    <aside className="cr-resumen">
                        <h3 className="cr-resumen__titulo">Resumen</h3>

                        <div className="cr-resumen__fila">
                            <span>Unidades</span>
                            <span className="cr-mono">{cantidadTotal}</span>
                        </div>
                        <div className="cr-resumen__total">
                            <span>Total</span>
                            <strong className="cr-mono">{formatoPrecio(calcularTotal)}</strong>
                        </div>

                        {!mostrarFormulario && (
                            <div className="cr-acciones">
                                <button type="button" className="cr-btn cr-btn--principal realizar-compra-btn" onClick={handleRealizarCompra}>
                                    Realizar compra — {formatoPrecio(calcularTotal)}
                                </button>
                                <button type="button" className="cr-btn cr-btn--secundario vaciar-btn" onClick={vaciarCarrito}>
                                    Vaciar carrito
                                </button>
                            </div>
                        )}
                    </aside>
                </div>
            )}

            {mostrarFormulario && (
                <div className="formulario-wrapper">
                    {/* El carrito se vacía al volver de Mercado Pago (ver ResultadoPago) */}
                    <Formulario onCerrar={() => setMostrarFormulario(false)} />
                </div>
            )}
        </section>
    );
};

export default Carrito;
