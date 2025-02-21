import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [cantidad, setCantidad] = useState(initial);

    const handleSumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    };

    const handleRestar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    return (
        <div className="item-count">
            <button className='buy--button' onClick={handleRestar} disabled={cantidad <= 1}>-</button>
            <span className='see--button Numero'>{cantidad}</span>
            <button className='buy--button' onClick={handleSumar} disabled={cantidad >= stock}>+</button>
            <button className='buy--button Numero1' onClick={() => onAdd(cantidad)}>Agregar al Carrito</button>
        </div>
    );
};

export default ItemCount;