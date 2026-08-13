import React from 'react';
import { NavLink } from "react-router-dom";
import "../NavBar/NavBar.css";
import "../Categorias/Categorias.css";

const Categorias = () => {
    return (
        <div className="ContainerCategories">
            <div className="Auto-Container2">
                <h4 className="Categories-h4">Categorías</h4>
                <ul className="Categories">
                    <li className="Categories-li">
                        <NavLink to="/categoria/videojuegos">Videojuegos</NavLink>
                    </li>
                    <li className="Categories-li">
                        <NavLink to="/categoria/computadoras">Computadoras</NavLink>
                    </li>
                    <li className="Categories-li">
                        <NavLink to="/categoria/celulares">Celulares</NavLink>
                    </li>
                    <li className="Categories-li">
                        <NavLink to="/categoria/television">Televisión</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Categorias;