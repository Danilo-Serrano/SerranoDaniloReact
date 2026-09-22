const CLAVE = "carrito-gamerzone";

// Lo guardado en el navegador puede estar dañado o haber sido modificado a mano,
// así que solo se acepta lo que tenga la forma exacta de una línea del carrito.
const esLineaValida = (linea) =>
    Boolean(linea) &&
    typeof linea.item?.id === "string" && linea.item.id !== "" &&
    typeof linea.item.nombre === "string" &&
    Number.isFinite(linea.item.precio) &&
    Number.isInteger(linea.cantidad) && linea.cantidad > 0;

// Devuelve el carrito guardado, o [] si no hay nada o no se puede leer.
export const leerCarritoGuardado = () => {
    try {
        const guardado = JSON.parse(localStorage.getItem(CLAVE));
        if (!Array.isArray(guardado)) return [];
        return guardado.filter(esLineaValida).map(({ item, cantidad }) => ({
            item: { id: item.id, nombre: item.nombre, precio: item.precio },
            cantidad,
        }));
    } catch {
        // JSON inválido o localStorage bloqueado (modo privado, permisos): se arranca vacío.
        return [];
    }
};

export const guardarCarrito = (carrito) => {
    try {
        if (carrito.length === 0) {
            localStorage.removeItem(CLAVE);
        } else {
            localStorage.setItem(CLAVE, JSON.stringify(carrito));
        }
    } catch {
        // Sin espacio o bloqueado: el carrito sigue funcionando en memoria, solo que no se recuerda.
    }
};
