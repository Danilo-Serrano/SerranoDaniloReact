import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../services/config';
import { collection, getDocs } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import "../Ofertas/Ofertas.css";

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
                    const nombre = prod.nombre.toLowerCase();
                    const marca = prod.marca.toLowerCase();

                    // Mapeo flexible según lo que dice en el nombre o marca 
                    // (tarea q falta hacer) la MEJOR opción sería agregar categoría en el async o BD 
                    if (cat === "celulares") {
                        return nombre.includes("celular") || marca === "iphone" || marca === "samsung";
                    }
                    if (cat === "computadoras") {
                        return nombre.includes("notebook") || marca === "hp" || marca === "acer" || marca === "lenovo";
                    }
                    if (cat === "television") {
                        return nombre.includes("tv") || nombre.includes("smart") || marca === "e-nova" || marca === "philips" || marca === "rca";
                    }
                    if (cat === "videojuegos") {
                        return marca === "ps5" || marca === "ps4" || nombre.includes("god of war") || nombre.includes("control") || nombre.includes("detroit");
                    }
                    
                    return false;
                });

                setProductos(filtrados);
            })
            .catch(error => console.error("Error al obtener productos:", error))
            .finally(() => setCargando(false));

    }, [idCategoria]);

    if (cargando) return <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Cargando catálogo...</h2>;

    return (
        <div>
            <h2 className='products-title' style={{ textTransform: 'capitalize' }}>
                {idCategoria ? idCategoria : 'Productos'}
            </h2>
            <div className='line'></div>
            <ItemList productos={productos} />
        </div>
    );
};

export default ItemListContainer;