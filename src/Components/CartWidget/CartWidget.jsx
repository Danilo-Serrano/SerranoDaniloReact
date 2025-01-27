import carritoImg from "../../images/carrito.png"
import "./CartWidget.css";

const CartWidget = () => {
    return (
    <div>
        <img src={carritoImg} className="carrito" alt="Carrito"/>
        <strong>4</strong>
    </div>
    )
}

export default CartWidget