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
                        <NavLink to="/categoria/nike">Nike</NavLink>
                    </li>
                    <li className="Categories-li">
                        <NavLink to="/categoria/adidas">Adidas</NavLink>
                    </li>
                    <li className="Categories-li">
                        <NavLink to="/categoria/umbro">Umbro</NavLink>
                    </li>
                    <li className="Categories-li">
                        <NavLink to="/categoria/new-balance">New Balance</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Categorias;