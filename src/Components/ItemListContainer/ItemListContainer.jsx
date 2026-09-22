import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../services/config';
import { collection, getDocs } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import { CATEGORIAS } from "../services/productos";
import "./ItemListContainer.css";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const { idCategoria } = useParams();

    useEffect(() => {
        setCargando(true);

        const productosRef = collection(db, "productos");

        // Traemos todos los productos de Firestore
        getDocs(productosRef)
            .then(res => {
                const todosLosProductos = res.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                // Si no hay categoría en la URL, mostramos todos
                if (!idCategoria) {
                    setProductos(todosLosProductos);
                    return;
                }

                // Filtrado dinámico según la palabra en la URL
                const cat = idCategoria.toLowerCase();

                const filtrados = todosLosProductos.filter(prod => {
                    // Productos cargados desde el panel /admin: traen su categoría.
                    if (prod.categoria) {
                        return prod.categoria.toLowerCase() === cat;
                    }

                    // Productos anteriores (sin categoría): se deducen por marca ("New Balance" → "new-balance").
                    const marca = (prod.marca || "").toLowerCase().trim().replace(/\s+/g, "-");
                    return marca === cat;
                });

                setProductos(filtrados);
            })
            .catch(error => console.error("Error al obtener productos:", error))
            .finally(() => setCargando(false));

    }, [idCategoria]);

    if (cargando) return <p className="pg-estado">Cargando catálogo...</p>;

    // El título muestra el nombre de la categoría (con tilde), no el texto de la URL.
    const titulo = idCategoria
        ? CATEGORIAS.find((c) => c.valor === idCategoria.toLowerCase())?.etiqueta ?? idCategoria
        : "Productos";

    return (
        <section className="pg">
            <header className="pg-encabezado">
                <h2 className="pg-titulo" id="catalogo">{titulo}</h2>
                <p className="pg-subtitulo">
                    {productos.length} {productos.length === 1 ? "producto" : "productos"}
                </p>
            </header>
            {productos.length === 0
                ? <p className="pg-estado">Todavía no hay productos en esta categoría.</p>
                : <ItemList productos={productos} />}
        </section>
    );
};

export default ItemListContainer;