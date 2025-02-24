import React, { useState, useEffect } from 'react';
import { db } from '../services/config';
import { getDocs, collection, query, doc, updateDoc } from 'firebase/firestore';

const Productos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const obtenerProductos = async () => {
            const misProductos = query(collection(db, "productos"));
            const respuesta = await getDocs(misProductos);
            setProductos(respuesta.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        };

        obtenerProductos();
    }, []); // <-- Evita recarga infinita

    const descontarStock = async (producto) => {
        if (producto.stock > 0) {
            const productoRef = doc(db, "productos", producto.id);
            const nuevoStock = producto.stock - 1;

            await updateDoc(productoRef, { stock: nuevoStock });

            // Actualizar el estado con el nuevo stock
            setProductos(productos.map(p =>
                p.id === producto.id ? { ...p, stock: nuevoStock } : p
            ));
        } else {
            alert("Stock agotado");
        }
    };

    return (
        <div>
            <h2 className="products-title" id="sin-stock">Poco Stock</h2>
            <div className='line'></div>
            <div className='products-container'>
                {productos.map(producto => (
                    <div className='product-card' key={producto.id}>
                        <img className='product-image' src={producto.img} alt={producto.nombre} />
                        <h5 className="product--brand">{producto.marca}</h5>
                        <h3 className="product--title">{producto.nombre}</h3>
                        <p className="product--price2">${producto.precio}</p>
                        <p className='product--stock'>Stock: {producto.stock}</p>
                        <div className="button-container3">
                            <button className='see--button' onClick={() => descontarStock(producto)}>
                                Comprar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Productos;
