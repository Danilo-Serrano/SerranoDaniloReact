import React from 'react'
import {Link, NavLink} from "react-router-dom"
import "../NavBar/NavBar.css"
import "../Categorias/Categorias.css"
//Extraje el estilo del NavBar.css

const Categorias = () => {
return (
    <>
    
        <div className="ContainerCategories">
        <div className="Auto-Container2">
        <h4 className="Categories-h4">Categorias</h4>
        <ul className="Categories">
            <li className="Categories-li">
                <NavLink to="/videojuegos">Videojuegos</NavLink>
            </li>
            <li className="Categories-li">
                <NavLink to="/Computadoras">Computadoras</NavLink>
            </li>
            <li className="Categories-li">
                <NavLink to="/Celulares">Celulares</NavLink>
            </li>
            <li className="Categories-li">
                <NavLink to="/Televisiones">Televisiones</NavLink>
            </li>
        </ul>
        </div>
    </div>
    </>
)
}

export default Categorias