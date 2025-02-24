import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, precio, img, marca }) => {
    return (
    <div className='products-container'>
        <div className='product-card'>
            <img src={img} alt={nombre} className="product-image" />
            <h5 className="product--brand">{marca}</h5>
            <h3 className="product--title">{nombre}</h3>
            <p className="product--price2">${precio}</p>
            <div className="button-container">
        <Link className="see--button" to={`/item/${id}`}>
        <FontAwesomeIcon icon={faMagnifyingGlass} /> Ver detalles
        </Link>
</div>
        </div>
        </div>
    );
};

export default Item;