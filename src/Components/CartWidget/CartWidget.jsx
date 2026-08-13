import React, { useContext } from 'react';
import { CarritoContext } from '../Context/CarritoContext.jsx'; // Ajusta la ruta si es necesario
import "./CartWidget.css";

const CartWidget = () => {
    const { carrito } = useContext(CarritoContext);

    // Cuenta cuántos productos distintos hay en el array
    const productosDistintos = carrito.length;

    return (
        <div className="cart-widget-container">
            <img src="/images/carrito.png" className="carrito" alt="Carrito" />
            <span className="cart-count">{productosDistintos}</span>
        </div>
    );
};

export default CartWidget;