import logo from "../images/logo.png"
import CartWidget from "./CartWidget/CartWidget"
import React from 'react'

const NavBar = () => {
    return (
        <>
    <div className="NavBarBackground">
        <div className="Auto-Container">
        <div className="NavBar-Left">
        <img src={logo} className="logo"/>
        <h1>GameZone</h1>
        </div>
        <div className="NavBar-Right">
            <nav>
        <ul className="NavBar-Ul">
            <input className="Ul-Input" type="text" placeholder="Buscar Juegos"></input>
            <li>Inicio</li>
            <li>Juegos</li>
            <li>Tienda</li>
            <li><CartWidget className="hola"/></li>
        </ul>
        </nav>
        </div>
        </div>
    </div>
    <div className="ContainerCategories">
        <div className="Auto-Container2">
        <h4 className="Categories-h4">Categorias</h4>
        <ul className="Categories">
            <li className="Categories-li">Acción</li>
            <li className="Categories-li">Juego de Rol</li>
            <li className="Categories-li">Shooters</li>
            <li className="Categories-li">Deportes</li>
            <li className="Categories-li">Estrategia</li>
            <li className="Categories-li">Mundo Abierto</li>
        </ul>
        </div>
    </div>
    <div className="BackgroundBody">

    </div>
    </>
    )
}

export default NavBar