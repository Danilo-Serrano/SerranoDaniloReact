import React, { useState, useContext } from 'react';
import { CarritoContext } from '../Context/CarritoContext.jsx'; 
import Formulario from '../Formulario/Formulario'; 

const Carrito = () => {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    const { carrito, vaciarCarrito, total, eliminarProducto } = useContext(CarritoContext);


    const handleRealizarCompra = () => {
        setMostrarFormulario(true); 
    };

    return (
        <>
            <h2 className='ofertas--container2'>Carrito</h2>
            <div className='line'></div>
            <div className='Carrito--Container'>
                <h3 className='CantidadTotal'>
                    <span className='MontoTotalText'>Monto Total: </span>
                    <span className='MontoTotalValue'>${total}</span>
                </h3>

                <div className="product-card--Carrito">
                    {carrito.length === 0 ? (
                        <p>No has seleccionado ningún producto</p>
                    ) : (
                        carrito.map((prod) => (
                            <div key={prod.item.id} className="producto-carrito">
                                <h3 className="product--title">{prod.item.nombre}</h3>
                                <p className='Cantidad--Carrito'>Cantidad: {prod.cantidad}</p>
                                <p className="product--price2">Precio por unidad: ${prod.item.precio}</p>
                                <button className="see--button gris" onClick={() => eliminarProducto(prod.item.id)}>Eliminar Producto</button>
                            </div>
                        ))
                    )}
                </div>

                {carrito.length > 0 && (
                    <>
                        <button className="see--button" onClick={vaciarCarrito}>
                            Vaciar carrito
                        </button>
                        <button className="Agregar" onClick={handleRealizarCompra}>
                            Realizar Compra
                        </button>
                    </>
                )}
                {mostrarFormulario && <Formulario />}
            </div>
        </>
    );
};

export default Carrito;

