import { useState, useEffect, createContext } from "react";
import { leerCarritoGuardado, guardarCarrito } from "../services/carritoStorage";

export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0,
});

export const CarritoProvider = ({ children }) => {
    // Al abrir la tienda se recupera el carrito guardado en el navegador (se lee una sola vez).
    const [carrito, setCarrito] = useState(leerCarritoGuardado);

    // Cada cambio del carrito se guarda para recordarlo al recargar o volver más tarde.
    useEffect(() => {
        guardarCarrito(carrito);
    }, [carrito]);

    // Se calculan a partir del carrito: así nunca quedan desfasados de lo que se restauró.
    const cantidadTotal = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    const total = carrito.reduce((acc, prod) => acc + prod.item.precio * prod.cantidad, 0);

    const agregarAlCarrito = (item, cantidad) => {
        setCarrito((prev) => {
            const existe = prev.some((prod) => prod.item.id === item.id);
            if (!existe) return [...prev, { item, cantidad }];
            // Al sumar más unidades se refresca el producto, por si el precio guardado quedó viejo.
            return prev.map((prod) =>
                prod.item.id === item.id ? { item, cantidad: prod.cantidad + cantidad } : prod
            );
        });
    };

    const eliminarProducto = (id) => {
        setCarrito((prev) => prev.filter((prod) => prod.item.id !== id));
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    return (
        <CarritoContext.Provider
            value={{
                carrito,
                total,
                cantidadTotal,
                agregarAlCarrito,
                eliminarProducto,
                vaciarCarrito,
            }}
        >
            {children}
        </CarritoContext.Provider>
    );
};
