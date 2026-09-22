import React, { useState, useContext } from 'react';
import "../ItemDetail/ItemDetail.css";
import { CarritoContext } from '../Context/CarritoContext';
import { Link } from 'react-router-dom';
import ItemCount from '../Item/ItemCount.jsx';
import { CATEGORIAS } from '../services/productos';

const formatoPrecio = (valor) =>
    Number.isFinite(valor)
        ? new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(valor)
        : `$${valor}`;

const ItemDetail = ({ id, nombre, precio, img, imagen, marca, stock, descripcion, categoria }) => {
    const { agregarAlCarrito } = useContext(CarritoContext);
    const [cantidadSeleccionada, setCantidadSeleccionada] = useState(1);

    const handleAgregar = (cantidad) => {
        setCantidadSeleccionada(cantidad);
        const item = { id, nombre, precio };
        agregarAlCarrito(item, cantidad);
    };

    // Los productos anteriores traen marca; los cargados desde el panel /admin traen categoría.
    const detalle = marca || CATEGORIAS.find((c) => c.valor === categoria)?.etiqueta;

    return (
        <div className='id-detalle'>
            <Link to="/" className="id-volver">← Atrás</Link>

            <div className='id-grilla'>
                <div className='id-foto'>
                    <img src={imagen ?? img} alt={nombre} className="id-img" />
                </div>

                <div className='id-info'>
                    {detalle && <p className="id-detalle-texto">{detalle}</p>}
                    <h1 className="id-nombre">{nombre}</h1>
                    <p className="id-precio">{formatoPrecio(precio)}</p>
                    {descripcion && <p className="id-descripcion">{descripcion}</p>}

                    <div className="id-compra">
                        <ItemCount stock={stock} initial={cantidadSeleccionada} onAdd={handleAgregar} precio={precio} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
