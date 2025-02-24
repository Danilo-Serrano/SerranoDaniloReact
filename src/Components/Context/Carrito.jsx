import React, { useState, useContext } from 'react';
import { CarritoContext } from '../Context/CarritoContext.jsx'; 
import Formulario from '../Formulario/Formulario'; 
import "../Context/Carrito.css"

const Carrito = () => {
const [mostrarFormulario, setMostrarFormulario] = useState(false);
const { carrito, vaciarCarrito, total, eliminarProducto } = useContext(CarritoContext);
const calcularTotal = carrito.reduce((acc, prod) => acc + prod.item.precio * prod.cantidad, 0);
const handleRealizarCompra = () => {
  setMostrarFormulario(true); // Muestra el formulario cuando se hace clic en "Realizar Compra"
};

const handleFormularioEnviado = () => {
  setMostrarFormulario(false); // Oculta el formulario después de enviarlo
};
return (
    <>
    <h2 className='ofertas--container2'>Carrito</h2>
    <div className='line'></div>
    
    <div className='Carrito--Container'>
        <div className="product-card--Carrito">
        {carrito.length === 0 ? (
            <p className='p'>No has seleccionado ningún producto</p>
        ) : (
            <>
            <div className="grid-header">
                <h3>Producto</h3>
                <h3>Cantidad</h3>
                <h3>Precio Producto</h3>
                <h3>Total</h3>
            </div>
            {carrito.map((prod) => (
                <div key={prod.item.id} className="producto-carrito">
                <div className="product--title">{prod.item.nombre}</div>
                <div className="product-quantity">{prod.cantidad}</div>
                <div className="product-price">${prod.item.precio}</div>
                <div className="product-total">${prod.item.precio * prod.cantidad}</div>
                <button className='eliminar-boton' onClick={() => eliminarProducto(prod.item.id)}>-</button>
                </div>
            ))}
            <div className="total-container">
                <h3 className='total'>Total de la compra: ${calcularTotal}</h3>
            </div>
            </>
        )}
    </div>
    {carrito.length > 0 && (
    <>
        <button className='see--button' onClick={vaciarCarrito}>
        Vaciar carrito
        </button>
        <button className='see--button' onClick={handleRealizarCompra}>
        Realizar Compra
        </button>
        </>
    )}

    {mostrarFormulario && <Formulario onSubmit={handleFormularioEnviado} />}
    </div>
</>
);
};

export default Carrito;



