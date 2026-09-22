import React, { useEffect, useState } from "react";
// Ofertas.css ya no da estilo a esta sección, pero se sigue importando desde acá porque define el fondo del body.
import "./Ofertas.css";
// La sección usa la misma grilla y tarjeta editorial que el catálogo.
import "../ItemListContainer/ItemListContainer.css";
import "../ItemList/ItemList.css";
import "../Item/ItemCard.css";

const ETIQUETAS = {
    "men's clothing": "Hombre",
    "women's clothing": "Mujer",
};

// FakeStoreAPI devuelve precios en USD
const formatoPrecio = (valor) =>
    new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(valor);

const Ofertas = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // FakeStoreAPI: api pública sin api keys. 2 de ropa de hombre + 2 de mujer.
        const pedir = (categoria) =>
            fetch(`https://fakestoreapi.com/products/category/${encodeURIComponent(categoria)}?limit=2`).then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            });

        Promise.all([pedir("men's clothing"), pedir("women's clothing")])
            .then(([hombre, mujer]) => {
                setProductos([...hombre, ...mujer]);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error al obtener datos:", err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p className="pg-estado loading">Cargando productos...</p>;
    if (error) return <p className="pg-estado error">Ocurrió un error al cargar las ofertas.</p>;

    return (
        <section className="pg">
            <header className="pg-encabezado">
                <h2 className="pg-titulo" id="sin-stock">Próximamente</h2>
            </header>
            <div className="container--Item">
                {productos.map((producto) => (
                    <article key={producto.id} className="ic-card">
                        
                        <div className="ic-body">
                            <p className="ic-detalle">{ETIQUETAS[producto.category] ?? producto.category}</p>
                            <h3 className="ic-nombre">{producto.title}</h3>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Ofertas;
