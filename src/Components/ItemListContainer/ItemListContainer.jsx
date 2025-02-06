import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";

const ItemListContainer = () => {
const [productos, setProductos] = useState([]);

useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLA/search?q=tecnologia&limit=10")
    .then((response) => response.json())
    .then((data) => {
        setProductos(data.results);
    })
    .catch((error) => console.error("Error", error));
}, []);

return (
    <div>
    <h2 className="products-title">Productos Tecnológicos</h2>
    <div className="products-container">
        {productos.map((producto) => (
        <div key={producto.id} className="product-card">
            <img src={producto.thumbnail} className="product-image" />
            <h3 className="product-title">{producto.title}</h3>
        </div>
        ))}
    </div>
    </div>
);
};

export default ItemListContainer;