import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ItemCount.css';
import { toast } from 'react-toastify';

const ItemCount = ({ stock, initial, onAdd }) => {
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
                <p className="sin-stock-mensaje" style={{ color: '#e74c3c', fontWeight: 'bold' }}>
                    Sin stock disponible
                </p>
                <div className="item-count__actions">
                    <Link to="/" className='see--button'>
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
                <button className='operation' onClick={handleRestar} disabled={cantidad <= 1}>-</button>
                <span className='counter-number'>{cantidad}</span>
                <button className='operation' onClick={handleSumar} disabled={cantidad >= stock}>+</button>
            </div>

            {/* Contenedor de acciones */}
            <div className="item-count__actions">
                <button 
                    className='buy--button' 
                    onClick={() => {
                        toast.success(`¡Agregaste ${cantidad} producto(s) al carrito!`, {
                            position: "bottom-right",
                            autoClose: 2500,
                            theme: "dark",
                        });
                        onAdd(cantidad);
                    }}
                >
                    Agregar al Carrito
                </button>

                <Link to="/cart" className='see--button'>
                    Ver Carrito
                </Link>
            </div>
        </div>
    );
};

export default ItemCount;