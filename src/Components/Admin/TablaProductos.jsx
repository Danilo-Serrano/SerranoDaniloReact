import React, { useState } from 'react';
import { toast } from 'react-toastify';
import {
    CATEGORIAS,
    aNumero,
    actualizarProducto,
    eliminarProducto,
    mensajeError,
    validarPrecio,
    validarStock,
} from '../services/productos';

const formatoPrecio = (valor) =>
    new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(valor);

const etiquetaCategoria = (valor) => CATEGORIAS.find((c) => c.valor === valor)?.etiqueta ?? "—";

const FilaProducto = ({ producto, onActualizado, onEliminado }) => {
    const [precio, setPrecio] = useState(String(producto.precio));
    const [stock, setStock] = useState(String(producto.stock));
    const [guardando, setGuardando] = useState(false);
    const [confirmando, setConfirmando] = useState(false);

    const precioNumero = aNumero(precio);
    const stockNumero = aNumero(stock);
    const hayCambios = precioNumero !== producto.precio || stockNumero !== producto.stock;

    const guardar = async () => {
        const error = validarPrecio(precioNumero) || validarStock(stockNumero);
        if (error) {
            toast.error(error, { theme: "dark" });
            return;
        }
        setGuardando(true);
        try {
            await actualizarProducto(producto.id, { precio: precioNumero, stock: stockNumero });
            onActualizado(producto.id, { precio: precioNumero, stock: stockNumero });
            toast.success(`"${producto.nombre}" actualizado.`, { theme: "dark" });
        } catch (err) {
            console.error("❌ ERROR AL ACTUALIZAR EL PRODUCTO:", err);
            toast.error(mensajeError(err), { theme: "dark" });
        } finally {
            setGuardando(false);
        }
    };

    const eliminar = async () => {
        setGuardando(true);
        try {
            await eliminarProducto(producto.id);
            onEliminado(producto.id);
            toast.success(`"${producto.nombre}" eliminado.`, { theme: "dark" });
        } catch (err) {
            console.error("❌ ERROR AL ELIMINAR EL PRODUCTO:", err);
            toast.error(mensajeError(err), { theme: "dark" });
            setGuardando(false);
            setConfirmando(false);
        }
    };

    // Los productos anteriores al panel guardan la imagen en "img".
    const imagen = producto.imagen ?? producto.img;

    return (
        <tr>
            <td data-label="Imagen">
                {imagen && <img className="admin-miniatura" src={imagen} alt="" onError={(e) => { e.currentTarget.style.visibility = "hidden"; }} />}
            </td>
            <td data-label="Producto" className="admin-celda-nombre">{producto.nombre}</td>
            <td data-label="Categoría" className="admin-celda-detalle">{etiquetaCategoria(producto.categoria)}</td>
            <td data-label="Precio">
                <div>
                    <input
                        className="admin-input admin-input--corto"
                        type="number" min="0" step="any"
                        aria-label={`Precio de ${producto.nombre}`}
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        disabled={guardando}
                    />
                    <small className="admin-nota">{Number.isFinite(producto.precio) && formatoPrecio(producto.precio)}</small>
                </div>
            </td>
            <td data-label="Stock">
                <input
                    className="admin-input admin-input--corto"
                    type="number" min="0" step="1"
                    aria-label={`Stock de ${producto.nombre}`}
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                    disabled={guardando}
                />
            </td>
            <td data-label="Acciones">
                <div className="admin-acciones">
                    {confirmando ? (
                        <>
                            <span className="admin-nota">¿Eliminar este producto?</span>
                            <button className="admin-boton admin-boton--peligro" onClick={eliminar} disabled={guardando}>Sí, eliminar</button>
                            <button className="admin-boton admin-boton--secundario" onClick={() => setConfirmando(false)} disabled={guardando}>Cancelar</button>
                        </>
                    ) : (
                        <>
                            <button className="admin-boton" onClick={guardar} disabled={!hayCambios || guardando}>
                                {guardando ? "Guardando..." : "Guardar"}
                            </button>
                            <button className="admin-boton admin-boton--peligro-suave" onClick={() => setConfirmando(true)} disabled={guardando}>Eliminar</button>
                        </>
                    )}
                </div>
            </td>
        </tr>
    );
};

const TablaProductos = ({ productos, cargando, error, onRecargar, onActualizado, onEliminado }) => (
    <div className="admin-card">
        <div className="admin-encabezado">
            <h3 className="admin-subtitulo">Inventario ({productos.length})</h3>
            <button className="admin-boton admin-boton--secundario" onClick={onRecargar} disabled={cargando}>
                {cargando ? "Cargando..." : "Actualizar"}
            </button>
        </div>

        {error && <p className="admin-error" role="alert">{error}</p>}

        {!error && !cargando && productos.length === 0 && (
            <p className="admin-estado">Todavía no hay productos cargados.</p>
        )}

        {productos.length > 0 && (
            <div className="admin-tabla-contenedor">
                <table className="admin-tabla">
                    <thead>
                        <tr>
                            <th></th><th>Producto</th><th>Categoría</th><th>Precio</th><th>Stock</th><th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map((producto) => (
                            <FilaProducto
                                key={producto.id}
                                producto={producto}
                                onActualizado={onActualizado}
                                onEliminado={onEliminado}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        )}
    </div>
);

export default TablaProductos;
