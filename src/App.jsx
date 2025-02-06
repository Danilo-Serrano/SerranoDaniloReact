
import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Categorias from "./Components/Categorias/Categorias";
import Celulares from "./Components/Celulares/Celulares";
import Computadoras from "./Components/Computadoras/Computadoras";
import Televisiones from "./Components/Televisiones/Televisiones";
import Videojuegos from "./Components/Videojuegos/Videojuegos";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"; // 📌 Importación correcta

function App() {
  return (
    <>
      <NavBar />

      <BrowserRouter>
        <Categorias />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Celulares" element={<Celulares />} />
          <Route path="/Computadoras" element={<Computadoras />} />
          <Route path="/Televisiones" element={<Televisiones />} />
          <Route path="/Videojuegos" element={<Videojuegos />} />
        </Routes>
      </BrowserRouter>

      <ItemListContainer />
    </>
  );
}

export default App;
