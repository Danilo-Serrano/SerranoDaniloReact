import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="ft">
            <div className="ft-contenedor">
                <Link to="/" className="ft-marca">MendoShop</Link>
                <nav className="ft-links" aria-label="Categorías">
                    <Link to="/categoria/nike">Nike</Link>
                    <Link to="/categoria/adidas">Adidas</Link>
                    <Link to="/categoria/umbro">Umbro</Link>
                    <Link to="/categoria/new-balance">New Balance</Link>
                </nav>
                <p className="ft-copy">© {new Date().getFullYear()} MendoShop</p>
            </div>
        </footer>
    );
};

export default Footer;
