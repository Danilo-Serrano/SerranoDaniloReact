import React, { useContext } from 'react';
import { ShoppingBag } from 'lucide-react';
import { CarritoContext } from '../Context/CarritoContext.jsx';
import "./CartWidget.css";

const CartWidget = () => {
    const { carrito } = useContext(CarritoContext);

    const productosDistintos = carrito.length;

    return (
        <span className="cart-widget-container">
            <ShoppingBag size={20} strokeWidth={1.5} aria-hidden="true" />
            <span className="cart-widget__texto">Carrito</span>
            {productosDistintos > 0 && <span className="cart-count">{productosDistintos}</span>}
        </span>
    );
};

export default CartWidget;
