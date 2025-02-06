import logo from "../../images/logo.png"
import CartWidget from "../CartWidget/CartWidget"
import React from 'react'

const NavBar = () => {
    return (
        <>
    <div className="NavBarBackground">
        <div className="Auto-Container">
        <div className="NavBar-Left">
        <img src={logo} className="logo"/>
        <a className="tittle" href="/">GameZone</a>
        </div>
        <div className="NavBar-Right">
            <nav>
        <ul className="NavBar-Ul">
            <input className="Ul-Input" type="text" placeholder="Buscar..."></input>
            <li>Inicio</li>
            <li>Juegos</li>
            <li>Tienda</li>
            <li><CartWidget /></li>
        </ul>
        </nav>
        </div>
        </div>
    </div>

    <div className="BackgroundBody">

    </div>
    </>
    )
}

export default NavBar