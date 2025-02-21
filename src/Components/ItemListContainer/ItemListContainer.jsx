import React from 'react'
import { useState, useEffect } from 'react'
import { getProductos } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    useEffect( () =>{
        getProductos()
        .then(respuesta =>{
            setProductos(respuesta)
        })
    })
return (
    <div>
        <h2 className='ofertas--container2'>Productos</h2>
        <div className='line'></div>
    <ItemList productos={productos}/>
    </div>
)
}

export default ItemListContainer