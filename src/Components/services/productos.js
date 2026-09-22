import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "./config";

// Valores que usa la ruta /categoria/:idCategoria del catálogo.
export const CATEGORIAS = [
    { valor: "nike", etiqueta: "Nike" },
    { valor: "adidas", etiqueta: "Adidas" },
    { valor: "umbro", etiqueta: "Umbro" },
    { valor: "new-balance", etiqueta: "New Balance" },
];

// Los <input> entregan texto: un campo vacío debe ser inválido, no 0.
export const aNumero = (valor) => (String(valor).trim() === "" ? NaN : Number(valor));

export const validarPrecio = (precio) =>
    Number.isFinite(precio) && precio > 0 ? null : "El precio debe ser un número mayor a 0.";

export const validarStock = (stock) =>
    Number.isInteger(stock) && stock >= 0 ? null : "El stock debe ser un número entero, 0 o mayor.";

// Devuelve { campo: mensaje } con los errores; vacío si el producto es válido.
export const validarProducto = ({ nombre, precio, stock, categoria, descripcion, imagen }) => {
    const errores = {};
    if (!nombre?.trim()) errores.nombre = "Ingresá el nombre.";
    const errorPrecio = validarPrecio(precio);
    if (errorPrecio) errores.precio = errorPrecio;
    const errorStock = validarStock(stock);
    if (errorStock) errores.stock = errorStock;
    if (!CATEGORIAS.some((c) => c.valor === categoria)) errores.categoria = "Elegí una categoría.";
    if (!descripcion?.trim()) errores.descripcion = "Ingresá una descripción.";
    if (!/^(https?:\/\/|\/)\S+$/.test(imagen?.trim() ?? "")) {
        errores.imagen = "Ingresá una URL válida (https://... o /images/...).";
    }
    return errores;
};

export const listarProductos = async () => {
    const snapshot = await getDocs(collection(db, "productos"));
    return snapshot.docs
        .map((d) => ({ id: d.id, ...d.data() }))
        .sort((a, b) => (a.nombre ?? "").localeCompare(b.nombre ?? "", "es"));
};

export const crearProducto = async ({ nombre, precio, stock, categoria, descripcion, imagen }) => {
    const producto = {
        nombre: nombre.trim(),
        precio,
        stock,
        categoria,
        descripcion: descripcion.trim(),
        imagen: imagen.trim(),
    };
    const ref = await addDoc(collection(db, "productos"), producto);
    return { id: ref.id, ...producto };
};

export const actualizarProducto = (id, { precio, stock }) =>
    updateDoc(doc(db, "productos", id), { precio, stock });

export const eliminarProducto = (id) => deleteDoc(doc(db, "productos", id));

// Traduce los errores de Firebase a un mensaje entendible para el administrador.
export const mensajeError = (error) => {
    switch (error?.code) {
        case "permission-denied":
            return "No tenés permisos para modificar productos. Verificá que tu usuario sea administrador en las reglas de Firestore.";
        case "unauthenticated":
            return "Tu sesión expiró. Volvé a iniciar sesión.";
        case "unavailable":
            return "No hay conexión con Firebase. Intentá nuevamente.";
        default:
            return error?.message || "Ocurrió un error inesperado.";
    }
};
