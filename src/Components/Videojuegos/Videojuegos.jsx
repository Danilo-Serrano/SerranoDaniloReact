import { useEffect, useState } from "react";
import { getProductos } from "../../Components/../asyncMock.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Videojuegos = ({ agregarAlCarrito }) => {
    const [videojuegos, setVideojuegos] = useState([]);

    useEffect(() => {
        getProductos().then(productos => {
            const games = productos.filter(producto =>
                producto.marca.toLowerCase().includes("ps4") || 
                producto.marca.toLowerCase().includes("ps5")
            );
            setVideojuegos(games);
        }).catch(error => {});
    }, []);

    return (
    <>
    <h2 className="products-title">Videojuegos</h2>
    <div className='line'></div>
    <div className="ofertas--container" id="videojuegos">
        <div className="products-container">
            {videojuegos.map(juego => (
                <div key={juego.id} className="product-card">
                    <img src={juego.img} className="product-image" alt={juego.nombre} />
                    <h5 className="product--brand">{juego.marca}</h5>
                    <h3 className="product--title">{juego.nombre}</h3>
                    <p className="product--price2">{juego.precio}</p>
                    <div className="button-container">
                            <Link className='see--button' to={`/item/${juego.id}`}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} /> Ver detalles
                            </Link>
                        </div>
                </div>
            ))}
        </div>
    </div>
</>
);
};

export default Videojuegos;