import { useEffect, useState } from "react";
import { getProductos } from "../../Components/../asyncMock.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Televisiones = () => {
    const [televisores, setTelevisores] = useState([]);

    useEffect(() => {
        getProductos().then(productos => {
            const tvs = productos.filter(producto => 
                producto.nombre.toLowerCase().includes("smart") 
            );
            setTelevisores(tvs);
        });
    }, []);

    return (
    <>
    <h2 className="products-title">Televisores</h2>
    <div className='line'></div>
    <div className="ofertas--container" id="televisores">
        <div className="products-container">
            {televisores.map(tv => (
                <div key={tv.id} className="product-card">
                    <img src={tv.img} className="product-image" alt={tv.nombre} />
                    <h5 className="product--brand">{tv.marca}</h5>
                    <h3 className="product--title">{tv.nombre}</h3>
                    <p className="product--price2">{tv.precio}</p>
                    <div className="button-container">
                            <Link className='see--button' to={`/item/${tv.id}`}>
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

export default Televisiones;