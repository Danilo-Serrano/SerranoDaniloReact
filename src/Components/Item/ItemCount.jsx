import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ItemCount.css';
import { toast } from 'react-toastify';

const formatoPrecio = (valor) =>
    new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(valor);

// precio es opcional: si viene, el botón muestra el total ("AGREGAR — $ 40.000").
const ItemCount = ({ stock, initial, onAdd, precio }) => {
    const [cantidad, setCantidad] = useState(initial);

    // Si no hay stock, consideramos el producto agotado
    const sinStock = stock <= 0;

    const handleSumar = () => {
        if (cantidad < stock) setCantidad(cantidad + 1);
    };

    const handleRestar = () => {
        if (cantidad > 1) setCantidad(cantidad - 1);
    };

    if (sinStock) {
        return (
            <div className="item-count">
                <p className="sin-stock-mensaje">
                    Sin stock disponible
                </p>
                <div className="item-count__actions">
                    <Link to="/" className='item-count__btn item-count__btn--secundario'>
                        Ver otros productos
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="item-count">
            {/* Contenedor Flex para la fila del selector */}
            <div className="item-count__controls">
                <button className='operation' onClick={handleRestar} disabled={cantidad <= 1} aria-label="Restar una unidad">-</button>
                <span className='counter-number'>{cantidad}</span>
                <button className='operation' onClick={handleSumar} disabled={cantidad >= stock} aria-label="Sumar una unidad">+</button>
            </div>

            {/* Contenedor de acciones */}
            <div className="item-count__actions">
                <button
                    className='item-count__btn item-count__btn--principal'
                    onClick={() => {
                        toast.success(`¡Agregaste ${cantidad} producto(s) al carrito!`, {
                            position: "bottom-right",
                            autoClose: 2500,
                            theme: "dark",
                        });
                        onAdd(cantidad);
                    }}
                >
                    {Number.isFinite(precio) ? `Agregar — ${formatoPrecio(precio * cantidad)}` : "Agregar al Carrito"}
                </button>

                <Link to="/carrito" className='item-count__btn item-count__btn--secundario'>
                    Ver Carrito
                </Link>
            </div>
        </div>
    );
};

export default ItemCount;
