import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CarritoContext } from '../Context/CarritoContext';
import { CATEGORIAS } from '../services/productos';
// Item.css tiene reglas compartidas con Ofertas, el detalle y el carrito: se sigue cargando desde acá.
import './Item.css';
import './ItemCard.css';

const formatoPrecio = (valor) =>
    Number.isFinite(valor)
        ? new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(valor)
        : `$${valor}`;

// Props originales: id, nombre, precio, img, marca. Se suman stock y categoria (opcionales).
const Item = ({ id, nombre, precio, img, marca, stock, categoria }) => {
    const { carrito, agregarAlCarrito } = useContext(CarritoContext);

    const sinStock = stock <= 0;
    // Los productos anteriores traen marca; los cargados desde el panel /admin traen categoría.
    const detalle = marca || CATEGORIAS.find((c) => c.valor === categoria)?.etiqueta;

    const agregar = () => {
        const enCarrito = carrito.find((prod) => prod.item.id === id)?.cantidad ?? 0;
        if (Number.isFinite(stock) && enCarrito >= stock) {
            toast.info("Ya tenés todo el stock disponible en el carrito.", {
                position: "bottom-right",
                autoClose: 2500,
                theme: "dark",
            });
            return;
        }
        agregarAlCarrito({ id, nombre, precio }, 1);
        toast.success("¡Agregaste 1 producto al carrito!", {
            position: "bottom-right",
            autoClose: 2500,
            theme: "dark",
        });
    };

    return (
        <article className="ic-card">
            {/* La foto también lleva al detalle; el link del nombre es el que leen los lectores de pantalla */}
            <Link className="ic-media" to={`/item/${id}`} tabIndex={-1} aria-hidden="true">
                <img src={img} alt={nombre} className="ic-img" loading="lazy" />
            </Link>

            <div className="ic-body">
                {detalle && <p className="ic-detalle">{detalle}</p>}
                <h3 className="ic-nombre">
                    <Link to={`/item/${id}`}>{nombre}</Link>
                </h3>
                <p className="ic-precio">{formatoPrecio(precio)}</p>

                <div className="ic-accion">
                    {sinStock ? (
                        <p className="ic-sin-stock">Sin stock</p>
                    ) : (
                        <button type="button" className="ic-btn" onClick={agregar} aria-label={`Agregar ${nombre} al carrito`}>
                            Agregar al carrito
                        </button>
                    )}
                </div>
            </div>
        </article>
    );
};

export default Item;
