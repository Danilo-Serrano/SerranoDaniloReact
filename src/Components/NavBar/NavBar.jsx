import CartWidget from "../CartWidget/CartWidget"
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Search, Menu, X, Settings } from 'lucide-react';
import "./NavBar.css";

const NavBar = () => {
    // Menú desplegable de la versión móvil
    const [menuAbierto, setMenuAbierto] = useState(false);
    const { pathname } = useLocation();

    // Al cambiar de página (incluido el botón "atrás") el menú se cierra.
    useEffect(() => {
        setMenuAbierto(false);
    }, [pathname]);

    // Con Escape también se cierra.
    useEffect(() => {
        if (!menuAbierto) return;
        const alPresionar = (e) => {
            if (e.key === "Escape") setMenuAbierto(false);
        };
        window.addEventListener("keydown", alPresionar);
        return () => window.removeEventListener("keydown", alPresionar);
    }, [menuAbierto]);

    const cerrarMenu = () => setMenuAbierto(false);

    const buscador = (
        <label className="nb-search">
            <Search size={16} strokeWidth={1.5} aria-hidden="true" />
            <input className="nb-search__input" type="search" placeholder="BUSCAR" aria-label="Buscar productos" />
        </label>
    );

    return (
        <>
        <div className="nb-strip">
            <div className="nb-strip__inner">
                <ul className="nb-strip__social">
                    <li><FontAwesomeIcon icon={faInstagram} /></li>
                    <li><FontAwesomeIcon icon={faTiktok} /></li>
                    <li><FontAwesomeIcon icon={faWhatsapp} /></li>
                </ul>
                <div className="nb-strip__right">
                    <span className="nb-strip__domain">GAMERZONE.COM.AR</span>
                    <Link to="/admin" className="admin-link" title="Administración" aria-label="Administración">
                        <Settings size={14} strokeWidth={1.5} aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </div>

        <div className="nb-bar">
            <div className="nb-inner">
                <Link to="/" className="nb-logo">MendoShop
                </Link>
                
                <nav className="nb-nav" aria-label="Principal">
                    <NavLink to="/" end className="nb-link">Catálogo</NavLink>
                    <a className="nb-link" href="#sin-stock">Próximamente</a>
                </nav>

                <div className="nb-actions">
                    <div className="nb-actions__buscador">{buscador}</div>
                    <Link to="/carrito" className="nb-icon-link" aria-label="Carrito">
                        <CartWidget />
                    </Link>
                    <button
                        type="button"
                        className="nb-toggle"
                        onClick={() => setMenuAbierto((abierto) => !abierto)}
                        aria-expanded={menuAbierto}
                        aria-controls="nb-menu-movil"
                        aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
                    >
                        {menuAbierto ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
                    </button>
                </div>
            </div>

            {menuAbierto && (
                <div className="nb-menu" id="nb-menu-movil">
                    <nav className="nb-menu__nav" aria-label="Menú móvil">
                        <NavLink to="/" end className="nb-link" onClick={cerrarMenu}>Catálogo</NavLink>
                        <a className="nb-link" href="#sin-stock" onClick={cerrarMenu}>Próximamente</a>
                    </nav>
                    {buscador}
                </div>
            )}
        </div>
        </>
    )
}

export default NavBar
