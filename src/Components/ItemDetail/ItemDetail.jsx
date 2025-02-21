import React, { useState, useContext } from 'react';
import "../ItemDetail/ItemDetail.css";
import { CarritoContext } from '../Context/CarritoContext';
import { Link } from 'react-router-dom';
import ItemCount from '../Item/ItemCount.jsx'; 

const ItemDetail = ({ id, nombre, precio, img, marca, stock }) => {
    const { agregarAlCarrito } = useContext(CarritoContext);
    const [cantidadSeleccionada, setCantidadSeleccionada] = useState(1); 

    const handleAgregar = (cantidad) => {
        setCantidadSeleccionada(cantidad);  
        const item = { id, nombre, precio };
        agregarAlCarrito(item, cantidad); 
    };

    return (
        <div className='ItemDetail--Container'>
            <div className='ItemDetail--Container__left'>
                <h5 className="product--brand">{marca}</h5>
                <h3 className="product--title">{nombre}</h3>
                <p className="product--price2">${precio}</p>
                <Link to="/"><button className='see--button'>Atrás</button></Link>
            </div>
            <div className='ItemDetail--Container__right'>
                <img src={img} alt={nombre} className="product-image2" />
                <div className="button-container">
                    <ItemCount stock={stock} initial={cantidadSeleccionada} onAdd={handleAgregar} />
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;




