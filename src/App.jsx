import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Categorias from "./Components/Categorias/Categorias";
import Footer from "./Components/Footer/Footer";
import Banner from "./Components/Banner/Banner";
import Ofertas from "./Components/Ofertas/Ofertas";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { CarritoProvider } from "./Components/Context/CarritoContext";
import Carrito from "./Components/Context/Carrito.jsx"
import CartWidget from "./Components/CartWidget/CartWidget.jsx";
import Productos from "./Components/Productos/Productos.jsx";
import MarqueeMessage from "./Components/Marquee/MarqueeMessage.jsx";
import Formulario from "./Components/Formulario/Formulario.jsx";
import ResultadoPago from "./Components/ResultadoPago/ResultadoPago.jsx";
import { AuthProvider } from "./Components/Admin/AuthContext.jsx";
import RutaProtegida from "./Components/Admin/RutaProtegida.jsx";
import AdminLogin from "./Components/Admin/AdminLogin.jsx";
import AdminPanel from "./Components/Admin/AdminPanel.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // En el panel de administración se oculta lo propio de la tienda (categorías, ofertas, etc.).
  const { pathname } = useLocation();
  const enAdmin = pathname.startsWith("/admin");
  const enInicio = pathname === "/";

  return (
    <AuthProvider>
    <CarritoProvider>
      <NavBar />
      {!enAdmin && <MarqueeMessage text="🚚 Envío GRATIS en todos los pedidos superiores a $50. ¡Aprovecha hoy!" />}
      {!enAdmin && <Categorias />}
      {enInicio && <Banner />}

      <Routes>
        <Route path="/" element={<ItemListContainer />} />

        <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />

        <Route path="/item/:id" element={<ItemDetailContainer />} />

        <Route path="/carrito" element={<Carrito />} />

        <Route path="/checkout" element={<Formulario />} />

        <Route path="/pago/exito" element={<ResultadoPago estado="exito" />} />
        <Route path="/pago/pendiente" element={<ResultadoPago estado="pendiente" />} />
        <Route path="/pago/error" element={<ResultadoPago estado="error" />} />

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<RutaProtegida><AdminPanel /></RutaProtegida>} />

        <Route path="*" element={<h2 style={{ textAlign: 'center', margin: '40px' }}>Página no encontrada (404)</h2>} />
      </Routes>

      {!enAdmin && <Ofertas />}
      {!enAdmin && <Footer />}
      <ToastContainer />
    </CarritoProvider>
    </AuthProvider>
  );
}

export default App;
