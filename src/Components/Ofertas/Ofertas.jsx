import React, { useEffect, useState } from "react";
import "./Ofertas.css";

const Ofertas = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Usamos DummyJSON como alternativa pública y estable
        //api publica sin api keys
        fetch("https://dummyjson.com/products/search?q=phone&limit=4")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                if (data && data.products) {
                    setProductos(data.products);
                } else {
                    setProductos([]);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error al obtener datos:", err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p className="loading">Cargando productos...</p>;
    if (error) return <p className="error">Ocurrió un error al cargar las ofertas.</p>;

    return (
        <>
            <h2 className="products-title" id="sin-stock">Próximamente</h2>
            <div className='line'></div>
            <div className="products-container2">
                {productos.map((producto) => (
                    <div key={producto.id} className="product-card">
                        <img src={producto.thumbnail} alt={producto.title} className="product-image" />
                        <h5 className="product--brand">{producto.brand || "Sin marca"}</h5>
                        <h3 className="product--title">{producto.title}</h3>
                        <p className="product--price2">${Math.round(producto.price)}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Ofertas;