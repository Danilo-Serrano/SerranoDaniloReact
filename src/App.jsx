import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Categorias from "./Components/Categorias/Categorias";
import Celulares from "./Components/Celulares/Celulares";
import Computadoras from "./Components/Computadoras/Computadoras";
import Televisiones from "./Components/Televisiones/Televisiones";
import Videojuegos from "./Components/Videojuegos/Videojuegos";
import Ofertas from "./Components/Ofertas/Ofertas";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { CarritoProvider } from "./Components/Context/CarritoContext";
import Carrito from "./Components/Context/Carrito.jsx"
import CartWidget from "./Components/CartWidget/CartWidget.jsx";
import Formulario from "./Components/Formulario/Formulario.jsx";
import Productos from "./Components/Productos/Productos.jsx";

function App() {
  return (
    <>
      <NavBar />
      <CarritoProvider>
      <Categorias />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Celulares" element={<Celulares />} />
        <Route path="/Computadoras" element={<Computadoras />} />
        <Route path="/Televisiones" element={<Televisiones />} />
        <Route path="/Videojuegos" element={<Videojuegos />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
      <ItemListContainer />
      <Ofertas />
      <CartWidget/>
      <Formulario/>
      </CarritoProvider>
      <Productos/>
    </>
  );
}

export default App;
