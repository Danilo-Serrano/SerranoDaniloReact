import React, { useState } from 'react';
import { toast } from 'react-toastify';
import {
    CATEGORIAS,
    aNumero,
    crearProducto,
    mensajeError,
    validarProducto,
} from '../services/productos';

const VACIO = { nombre: "", precio: "", stock: "", categoria: "", descripcion: "", imagen: "" };

const ProductoForm = ({ onCreado }) => {
    const [datos, setDatos] = useState(VACIO);
    const [errores, setErrores] = useState({});
    const [guardando, setGuardando] = useState(false);

    const cambiar = (campo) => (e) => setDatos((prev) => ({ ...prev, [campo]: e.target.value }));

    const manejadorSubmit = async (e) => {
        e.preventDefault();

        const producto = { ...datos, precio: aNumero(datos.precio), stock: aNumero(datos.stock) };
        const erroresValidacion = validarProducto(producto);
        setErrores(erroresValidacion);
        if (Object.keys(erroresValidacion).length > 0) return;

        setGuardando(true);
        try {
            const creado = await crearProducto(producto);
            toast.success(`Producto "${creado.nombre}" agregado correctamente.`, { theme: "dark" });
            setDatos(VACIO);
            onCreado(creado);
        } catch (error) {
            console.error("❌ ERROR AL CREAR EL PRODUCTO:", error);
            toast.error(mensajeError(error), { theme: "dark" });
        } finally {
            setGuardando(false);
        }
    };

    const campoError = (campo) => errores[campo] && <span className="admin-error">{errores[campo]}</span>;

    return (
        <form className="admin-card" onSubmit={manejadorSubmit} noValidate>
            <h3 className="admin-subtitulo">Agregar producto</h3>

            <div className="admin-grid">
                <div className="admin-campo">
                    <label className="admin-label" htmlFor="p-nombre">Nombre</label>
                    <input id="p-nombre" className="admin-input" type="text" value={datos.nombre} onChange={cambiar("nombre")} />
                    {campoError("nombre")}
                </div>

                <div className="admin-campo">
                    <label className="admin-label" htmlFor="p-categoria">Categoría</label>
                    <select id="p-categoria" className="admin-input" value={datos.categoria} onChange={cambiar("categoria")}>
                        <option value="">Elegí una categoría</option>
                        {CATEGORIAS.map((c) => (
                            <option key={c.valor} value={c.valor}>{c.etiqueta}</option>
                        ))}
                    </select>
                    {campoError("categoria")}
                </div>

                <div className="admin-campo">
                    <label className="admin-label" htmlFor="p-precio">Precio (ARS)</label>
                    <input id="p-precio" className="admin-input" type="number" min="0" step="any" value={datos.precio} onChange={cambiar("precio")} />
                    {campoError("precio")}
                </div>

                <div className="admin-campo">
                    <label className="admin-label" htmlFor="p-stock">Stock</label>
                    <input id="p-stock" className="admin-input" type="number" min="0" step="1" value={datos.stock} onChange={cambiar("stock")} />
                    {campoError("stock")}
                </div>

                <div className="admin-campo admin-campo--ancho">
                    <label className="admin-label" htmlFor="p-imagen">Imagen (URL)</label>
                    <input id="p-imagen" className="admin-input" type="text" placeholder="https://... o /images/archivo.jpg" value={datos.imagen} onChange={cambiar("imagen")} />
                    {campoError("imagen")}
                </div>

                <div className="admin-campo admin-campo--ancho">
                    <label className="admin-label" htmlFor="p-descripcion">Descripción</label>
                    <textarea id="p-descripcion" className="admin-input" rows="3" value={datos.descripcion} onChange={cambiar("descripcion")} />
                    {campoError("descripcion")}
                </div>
            </div>

            <button className="admin-boton" disabled={guardando}>
                {guardando ? "Guardando..." : "Agregar producto"}
            </button>
        </form>
    );
};

export default ProductoForm;
