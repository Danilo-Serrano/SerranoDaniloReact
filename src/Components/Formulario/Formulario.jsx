import React, { useState } from 'react';
import "../Formulario/Formulario.css";
import { db } from "../services/config";
import { collection, doc, runTransaction } from "firebase/firestore";
import { toast } from 'react-toastify';

const Formulario = ({ onSubmit, carrito = [], total = 0 }) => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [cargando, setCargando] = useState(false);

    const manejadorFormulario = async (e) => {
        e.preventDefault();
        setCargando(true);

        if (!db) {
            toast.error("Error de conexión con la base de datos.", { theme: "dark" });
            setCargando(false);
            return;
        }

        try {
            // Ejecutamos la transacción en Firestore
            const nuevoOrderId = await runTransaction(db, async (transaction) => {
                
                // 1. OBTENER LOS DOCUMENTOS DE LOS PRODUCTOS DEL CARRITO
                const lecturasProductos = await Promise.all(
                    carrito.map((prod) => {
                        const productRef = doc(db, "productos", prod.item.id);
                        return transaction.get(productRef);
                    })
                );

                // 2. VERIFICAR QUE EXISTA STOCK SUFICIENTE
                lecturasProductos.forEach((prodDoc, index) => {
                    if (!prodDoc.exists()) {
                        throw new Error(`El producto "${carrito[index].item.nombre}" no existe en la base de datos.`);
                    }

                    const stockActual = prodDoc.data().stock;
                    const cantidadComprada = carrito[index].cantidad;

                    if (stockActual < cantidadComprada) {
                        throw new Error(`Stock insuficiente para "${carrito[index].item.nombre}". Disponible: ${stockActual}`);
                    }
                });

                // 3. ACTUALIZAR (DESCONTAR) EL STOCK
                lecturasProductos.forEach((prodDoc, index) => {
                    const productRef = doc(db, "productos", prodDoc.id);
                    const stockActual = prodDoc.data().stock;
                    const cantidadComprada = carrito[index].cantidad;

                    transaction.update(productRef, {
                        stock: stockActual - cantidadComprada
                    });
                });

                // 4. GENERAR LA ORDEN DE COMPRA
                const itemsOrden = carrito.map(prod => ({
                    id: prod.item.id,
                    nombre: prod.item.nombre,
                    precio: prod.item.precio,
                    cantidad: prod.cantidad
                }));

                const nuevaOrdenRef = doc(collection(db, "ordenes"));
                transaction.set(nuevaOrdenRef, {
                    cliente: { nombre, apellido, telefono },
                    items: itemsOrden,
                    total: total,
                    fecha: new Date()
                });

                return nuevaOrdenRef.id;
            });

            // NOTIFICACIÓN Y LIMPIEZA
            toast.success(`¡Compra realizada con éxito! Orden ID: ${nuevoOrderId}`, {
                position: "bottom-right",
                autoClose: 4000,
                theme: "dark"
            });

            setNombre("");
            setApellido("");
            setTelefono("");

            if (typeof onSubmit === 'function') {
                onSubmit(nuevoOrderId);
            }

        } catch (error) {
            console.error("❌ ERROR EN LA COMPRA:", error);
            toast.error(error.message || "Hubo un problema al procesar tu compra.", {
                theme: "dark"
            });
        } finally {
            setCargando(false);
        }
    };

    return (
        <div className='form--container'>
            <form className="formulario" onSubmit={manejadorFormulario}>
                <h2 className='form--h2'>Formulario de Clientes</h2>

                <label className='form--label'>Nombre:</label>
                <input 
                    required 
                    className='form--input' 
                    type='text' 
                    onChange={(e) => setNombre(e.target.value)} 
                    value={nombre} 
                />

                <label className='form--label'>Apellido:</label>
                <input 
                    required 
                    className='form--input' 
                    type='text' 
                    onChange={(e) => setApellido(e.target.value)} 
                    value={apellido} 
                />

                <label className='form--label'>Teléfono:</label>
                <input 
                    required 
                    className='form--input' 
                    type='text' 
                    onChange={(e) => setTelefono(e.target.value)} 
                    value={telefono} 
                />

                <button className='form--button' disabled={cargando}>
                    {cargando ? "Procesando..." : "Finalizar Compra"}
                </button>
            </form>
        </div>
    );
};

export default Formulario;