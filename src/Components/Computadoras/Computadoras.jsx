import { useEffect, useState } from "react";
import { getProductos } from "../../Components/../asyncMock.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Computadoras = ({ agregarAlCarrito }) => {
    const [computadoras, setComputadoras] = useState([]);

    useEffect(() => {
        getProductos().then(productos => {
            const pcs = productos.filter(producto =>
                producto.nombre.toLowerCase().includes("notebook")
            );
            setComputadoras(pcs);
        });
    }, []);
    return (
        <>
            <h2 className="products-title">Computadoras</h2>
            <div className='line'></div>
            <div className="ofertas--container" id="computadoras">
                <div className="products-container">
                    {computadoras.map(pc => (
                        <div key={pc.id} className="product-card">
                            <img src={pc.img} className="product-image" alt={pc.nombre} />
                            <h5 className="product--brand">{pc.marca}</h5>
                            <h3 className="product--title">{pc.nombre}</h3>
                            <p className="product--price2">{pc.precio}</p>
                            <div className="button-container">
                            <Link className='see--button' to={`/item/${pc.id}`}>
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

export default Computadoras;


//                     <img src={juego.img} className="product-image" alt={juego.nombre} />
//                     <h5 className="product--brand">{juego.marca}</h5>
// //                     <h3 className="product--title">{juego.nombre}</h3>
// //                     <p className="product--price2">{juego.precio}</p>
//                     <div className="button-container">
//                             <Link className='see--button' to={`/item/${juego.id}`}>
//                                 <FontAwesomeIcon icon={faMagnifyingGlass} /> Ver detalles
//                             </Link>
//                             <button className="buy--button" onClick={() => agregarAlCarrito(juego)}>
//                                 Agregar al Carrito
//                             </button>
//                         </div>
//                 </div>
//             ))}
//         </div>
//     </div>
// </>
// );
// };

// export default Videojuegos;