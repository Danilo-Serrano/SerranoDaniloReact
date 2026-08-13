import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Categorias from "./Components/Categorias/Categorias";
import Ofertas from "./Components/Ofertas/Ofertas";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { CarritoProvider } from "./Components/Context/CarritoContext";
import Carrito from "./Components/Context/Carrito.jsx"
import CartWidget from "./Components/CartWidget/CartWidget.jsx";
import Productos from "./Components/Productos/Productos.jsx";
import MarqueeMessage from "./Components/Marquee/MarqueeMessage.jsx";
import Formulario from "./Components/Formulario/Formulario.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <CarritoProvider>
      <NavBar />
      <MarqueeMessage text="🚚 Envío GRATIS en todos los pedidos superiores a $50. ¡Aprovecha hoy!" />
      <Categorias />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />

        <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />

        <Route path="/item/:id" element={<ItemDetailContainer />} />

        <Route path="/carrito" element={<Carrito />} />

        <Route path="/checkout" element={<Formulario />} />

        <Route path="*" element={<h2 style={{ textAlign: 'center', margin: '40px' }}>Página no encontrada (404)</h2>} />
      </Routes>

      <Ofertas />
      <ToastContainer />
    </CarritoProvider>
  );
}

export default App;
