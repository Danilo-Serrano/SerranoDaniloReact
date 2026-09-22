import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from '../services/config'; // <-- Asegúrate de que la ruta a tu config.js sea correcta
import { doc, getDoc } from 'firebase/firestore';
import "../ItemListContainer/ItemListContainer.css";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const [cargando, setCargando] = useState(true);

    const { id } = useParams(); // Obtenemos la ID alfanumérica de Firebase desde la URL

    useEffect(() => {
        setCargando(true);

        // 1. Creamos la referencia al documento en la colección 'productos'
        const nuevoDoc = doc(db, "productos", id);

        // 2. Traemos el documento de Firestore
        getDoc(nuevoDoc)
            .then(res => {
                if (res.exists()) {
                    setProducto({ id: res.id, ...res.data() });
                } else {
                    console.error("El producto no existe en Firestore");
                }
            })
            .catch(error => console.error("Error al obtener el producto:", error))
            .finally(() => setCargando(false));

    }, [id]);

    // 3. Controlamos el estado mientras carga o si no existe para evitar que rompa ItemDetail
    if (cargando) {
        return <p className="pg-estado">Cargando producto...</p>;
    }

    if (!producto) {
        return <p className="pg-estado">El producto solicitado no existe.</p>;
    }

    return (
        <div>
            <ItemDetail {...producto} />
        </div>
    );
};

export default ItemDetailContainer;