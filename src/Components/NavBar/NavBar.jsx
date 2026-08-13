import CartWidget from "../CartWidget/CartWidget"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok, faWhatsapp } from "@fortawesome/free-brands-svg-icons"; 
import { Link } from 'react-router-dom';

import logoImg from '../../../public/images/logo.png'; 

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
                    <h4 className="a--ofertas">GamerZone.com.ar</h4>
                </div>
            </div>
        </div>
        
        <div className="NavBarBackground">
            <div className="Auto-Container">
                <div className="NavBar-Left">
                    {/* 2. USAR LA VARIABLE DEL LOGO Y Link EN LUGAR DE <a> */}
                    <Link to="/">
                        <img src={logoImg} className="logo" alt="GamerZone Logo" />
                    </Link>
                    <Link className="tittle" to="/">GamerZone</Link>
                </div>

                <div className="NavBar-Right">
                    <nav>
                        <ul className="NavBar-Ul">
                            <input className="Ul-Input" type="text" placeholder="Buscar..." />
                            
                            <li>
                                <a className="a--ofertas" href="#sin-stock">Proximamente</a>
                            </li>
                            
                            {/* 3. CAMBIAR EL ENLACE A INICIO POR Link to="/" */}
                            <li>
                                <Link className="a--ofertas" to="/">Inicio</Link>
                            </li>

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