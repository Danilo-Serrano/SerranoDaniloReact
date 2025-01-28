
import NavBar from './Components/NavBar.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./Components/NavBar.css"
import React from 'react'



import Home from "./Components/Home/Home"
import Categorias from './Components/Categorias/Categorias'
import Celulares from "./Components/Celulares/Celulares"
import Computadoras from './Components/Computadoras/Computadoras'
import Televisiones from "./Components/Televisiones/Televisiones"
import Videojuegos from './Components/Videojuegos/Videojuegos'


function App() {

  return (
    <>
      <NavBar />

      <BrowserRouter>
      <Categorias />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Celulares' element={<Celulares/>} />
          <Route path='/Computadoras' element={<Computadoras/>} />
          <Route path='/Televisiones' element={<Televisiones/>} />
          <Route path='Videojuegos' element={<Videojuegos/>} />

          </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
