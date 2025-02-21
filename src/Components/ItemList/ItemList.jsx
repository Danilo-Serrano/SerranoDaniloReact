import React from 'react';
import Item from "../Item/Item"
import "../Item/Item.css"


const ItemList = ({ productos }) => {
    return (
        <div className="container--Item">
            {productos.map((producto) => (
                <Item id={producto.id} nombre={producto.nombre} precio={producto.precio} img={producto.img} marca={producto.marca} />
            ))}
        </div>
    );
};

export default ItemList;