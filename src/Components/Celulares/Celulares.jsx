import { useEffect, useState } from "react";
import { getProductos } from "../../asyncMock";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Celulares = ({ agregarAlCarrito})=> {
const [celulares, setCelulares] = useState([]);

useEffect(() => {
    getProductos().then(productos => {
        const phones = productos.filter(producto =>
            producto.nombre.toLowerCase().includes("celular")
        );
        setCelulares(phones);
    });
}, []);

return (
    <>
        <h2 className="products-title">Celulares</h2>
        <div className='line'></div>
        <div className="ofertas--container" id="celulares">
            <div className="products-container">
                {celulares.map(cel => (
                    <div key={cel.id} className="product-card">
                        <img src={cel.img} className="product-image" alt={cel.nombre} />
                        <h5 className="product--brand">{cel.marca}</h5>
                        <h3 className="product--title">{cel.nombre}</h3>
                        <p className="product--price2">{cel.precio}</p>
                        <div className="button-container">
                            <Link className='see--button' to={`/item/${cel.id}`}>
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

export default Celulares;