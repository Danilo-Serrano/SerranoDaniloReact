import CartWidget from "../CartWidget/CartWidget"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok, faWhatsapp } from "@fortawesome/free-brands-svg-icons"; 
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <>
        <div className="header">
            <div className="header--ul">
                <div className="ul--left">
                <li><FontAwesomeIcon icon={faInstagram} /></li>
                <li><FontAwesomeIcon icon={faTiktok} /></li>
                <li><FontAwesomeIcon icon={faWhatsapp} /></li>
                </div>
                <div className="ul--right">
                <h4>GamerZone.com.ar</h4>
                </div>
            </div>
        </div>
    <div className="NavBarBackground">
        <div className="Auto-Container">
        <div className="NavBar-Left">
        <img src="../public/images/logo.png" className="logo"/>
        <a className="tittle" href="/">GamerZone</a>
        </div>
        <div className="NavBar-Right">
            <nav>
        <ul className="NavBar-Ul">
            <input className="Ul-Input" type="text" placeholder="Buscar..."></input>
            <li><a className="a--ofertas" href="#sin-stock">Proximamente</a></li>
            <li><a className="a--ofertas" href="../Home/Home.jsx">Inicio</a></li>
            <li>
                <Link to="/carrito">
                <button className="button-Carrito"><CartWidget /></button>
                </Link>
            </li>

        </ul>
        </nav>
        </div>
        </div>
    </div>


    </>
    )
}

export default NavBar