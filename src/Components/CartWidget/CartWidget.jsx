import React, { useContext } from 'react';
import { CarritoContext } from '../Context/CarritoContext.jsx';
import "./CartWidget.css";
// 1. Importas la imagen como un módulo
import carritoImg from '../../../public/images/carrito.png'; // Ajusta la ruta a tu carpeta assets

const CartWidget = () => {
    const { carrito } = useContext(CarritoContext);

    const productosDistintos = carrito.length;

    return (
        <div className="cart-widget-container">
            {/* 2. Usas la variable importada en el src */}
            <img src={carritoImg} className="carrito" alt="Carrito" />
            <span className="cart-count">{productosDistintos}</span>
        </div>
    );
};

export default CartWidget;