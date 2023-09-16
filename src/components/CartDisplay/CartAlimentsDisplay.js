import './CartAlimentsDisplay.css';
import { cartAliments } from '../../data/cartAliments';
import { useParams } from "react-router-dom";


const CartAlimentsDisplay = () => {
    return (
        <div className="cart-aliment-container">
            <div className="cart-aliment-content">
                {cartAliments.map(({ name, quantity, unit, expiration_date, price, price_unit, picture }) => (
                    <div className="cart-aliment">
                        <div className='cart-aliment-infos'>
                            <div className="cart-aliment-image-area">
                                <img className="cart-aliment-image" src={picture} alt="" />
                            </div>
                            <div className="cart-aliment-text-area">
                                <p className="cart-aliment-text">
                                    {name}
                                    <br />
                                    <br />
                                    Quantité : {quantity} {unit}
                                    <br />
                                    <br />
                                    Date d'expiration : {expiration_date}
                                    <br />
                                    <br />
                                    Prix : {price}{price_unit}
                                </p>
                            </div>
                        </div>
                        <div className='contact-seller-area'>
                        <button className="cart-button" type="submit">Contact seller</button>
                        </div>
                    </div>))}
            </div>
        </div>
    );
}

export default CartAlimentsDisplay;