import React from 'react';
import Item from "../Item/Item"
import "../ItemList/ItemList.css"


const ItemList = ({ productos }) => {
    return (
        <div className="container--Item">
            {productos.map((producto) => (
                <Item key={producto.id} id={producto.id} nombre={producto.nombre} precio={producto.precio} img={producto.imagen ?? producto.img} marca={producto.marca} stock={producto.stock} categoria={producto.categoria} />
            ))}
        </div>
    );
};

export default ItemList;