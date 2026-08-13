import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../Context/CarritoContext.jsx'; 
import Formulario from '../Formulario/Formulario'; 
import "../Context/Carrito.css";
import "../Ofertas/Ofertas.css";

const Carrito = () => {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const { carrito, vaciarCarrito, eliminarProducto } = useContext(CarritoContext);

    // Cálculo del total
    const calcularTotal = carrito.reduce((acc, prod) => acc + prod.item.precio * prod.cantidad, 0);

    const handleRealizarCompra = () => {
        setMostrarFormulario(true);
    };

    const handleFormularioEnviado = () => {
        setMostrarFormulario(false);
        vaciarCarrito(); // <--- AHORA SÍ VACÍA EL CARRITO AL FINALIZAR
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
        <section className="carrito-section">
            <div style={{ display: 'flex', marginLeft: 55  }}>
            <h2 className='products-title'>Carrito de Compras</h2>
            </div>
            <div className='line'></div>

            <div className='Carrito--Container'>
                {carrito.length === 0 ? (
                    <div className="carrito-vacio">
                        <p className='p'>Tu carrito está vacío 🛒</p>
                        <p className='p-sub'>¿No sabés qué comprar? ¡Mirá nuestros productos!</p>
                        <Link to="/" className="see--button ver-productos-btn">
                            Ver Productos
                        </Link>
                    </div>
                ) : (
                    <div className="product-card--Carrito">
                        <div className="grid-header">
                            <h3>Producto</h3>
                            <h3>Cantidad</h3>
                            <h3>Precio Un.</h3>
                            <h3>Subtotal</h3>
                            <h3>Acción</h3>
                        </div>

                        {carrito.map((prod) => (
                            <div key={prod.item.id} className="producto-carrito">
                                <div className="product--title">{prod.item.nombre}</div>
                                <div className="product-quantity">
                                    <span className="badge-cantidad">{prod.cantidad}</span>
                                </div>
                                <div className="product-price">{formatoPrecio(prod.item.precio)}</div>
                                <div className="product-total">{formatoPrecio(prod.item.precio * prod.cantidad)}</div>
                                <div className="product-action">
                                    <button 
                                        className='eliminar-boton' 
                                        onClick={() => eliminarProducto(prod.item.id)}
                                        title="Eliminar producto"
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>
                        ))}

                        <div className="total-container">
                            <h3 className='total'>
                                <span className='total'>Total de la compra:</span> 
                                <strong>{formatoPrecio(calcularTotal)}</strong>
                            </h3>
                        </div>

                        {!mostrarFormulario && (
                            <div className="acciones-carrito">
                                <button className='see--button vaciar-btn' onClick={vaciarCarrito}>
                                    Vaciar carrito
                                </button>
                                <button className='buy--button realizar-compra-btn' onClick={handleRealizarCompra}>
                                    Realizar Compra
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {mostrarFormulario && (
                    <div className="formulario-wrapper">
                        {/* SE PASAN LAS PROPS QUE REQUIERE EL FORMULARIO */}
                        <Formulario 
                            onSubmit={handleFormularioEnviado} 
                            carrito={carrito} 
                            total={calcularTotal} 
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Carrito;