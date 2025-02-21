import React, { useEffect, useState } from "react";
import "./Ofertas.css";


const Ofertas = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch("https://api.mercadolibre.com/sites/MLA/search?q=tecnologia&limit=4")
            .then((response) => response.json())
            .then((data) => {
                setProductos(data.results);
            })
            .catch((error) => console.error("Error", error));
    }, []);

    return (
        <>
            <h2 className="products-title" id="sin-stock">Proximamente</h2>
            <div className='line'></div>
            <div className="products-container">
                {productos.map((producto) => (
                    <div key={producto.id} className="product-card">
                        <img src={producto.thumbnail} alt={producto.title} className="product-image" />
                        <h5 className="product--brand">{producto.attributes?.find(attr => attr.id === "BRAND")?.value_name || "Sin marca"}</h5>
                        <h3 className="product--title">{producto.title}</h3>
                        <p className="product--price2">${Math.round(producto.price)}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Ofertas;
