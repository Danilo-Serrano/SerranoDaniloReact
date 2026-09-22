import React from "react";
import "./Banner.css";

const Banner = () => {
    return (
        <section className="bn" aria-label="Portada">
            <div className="bn-contenedor">
                <p className="bn-etiqueta">
                    <span className="bn-punto" aria-hidden="true">●</span> Indumentaria deportiva
                </p>
                <h1 className="bn-titulo">
                    Nike<br />
                    Adidas<br />
                    Umbro<br />
                    New Balance
                </h1>
                <div className="bn-pie">
                    <p className="bn-texto">Ropa y calzado deportivo de cuatro marcas.</p>
                    <a href="#catalogo" className="bn-btn">Ver catálogo</a>
                </div>
            </div>
        </section>
    );
};

export default Banner;
