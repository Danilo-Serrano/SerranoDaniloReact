import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import ProductoForm from './ProductoForm';
import TablaProductos from './TablaProductos';
import { listarProductos, mensajeError } from '../services/productos';
import "./Admin.css";

const porNombre = (a, b) => (a.nombre ?? "").localeCompare(b.nombre ?? "", "es");

const AdminPanel = () => {
    const { usuario, logout } = useAuth();
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

    const cargar = useCallback(async () => {
        setCargando(true);
        setError("");
        try {
            setProductos(await listarProductos());
        } catch (err) {
            console.error("❌ ERROR AL CARGAR LOS PRODUCTOS:", err);
            setError(mensajeError(err));
        } finally {
            setCargando(false);
        }
    }, []);

    useEffect(() => {
        cargar();
    }, [cargar]);

    // Se actualiza la lista local para no volver a leer toda la colección en cada cambio.
    const productoCreado = (producto) => setProductos((prev) => [...prev, producto].sort(porNombre));
    const productoActualizado = (id, cambios) =>
        setProductos((prev) => prev.map((p) => (p.id === id ? { ...p, ...cambios } : p)));
    const productoEliminado = (id) => setProductos((prev) => prev.filter((p) => p.id !== id));

    return (
        <section className="admin-panel">
            <header className="admin-barra">
                <div>
                    <h2 className="admin-titulo">Panel de administración</h2>
                    <small className="admin-nota">Sesión: {usuario?.email}</small>
                </div>
                <div className="admin-barra__acciones">
                    <Link className="admin-boton admin-boton--secundario" to="/">Ver tienda</Link>
                    <button className="admin-boton admin-boton--secundario" onClick={logout}>Cerrar sesión</button>
                </div>
            </header>

            <ProductoForm onCreado={productoCreado} />

            <TablaProductos
                productos={productos}
                cargando={cargando}
                error={error}
                onRecargar={cargar}
                onActualizado={productoActualizado}
                onEliminado={productoEliminado}
            />
        </section>
    );
};

export default AdminPanel;
