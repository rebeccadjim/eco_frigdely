import { fridge } from "../data/fridge";
import { useParams } from "react-router-dom";
import '../styles/Fridge.css';

function Fridge() {
    return (
        <div className="fridge-page-container">
            <div className="fridge-page-deco">
                <p className="your-fridge">Your fridge</p>
                <div className="trait"><hr /></div>
            </div>

            <div className="aliment-container">
                {fridge.map(({ name, quantity, unit, expiration_date, price, price_unit, picture }) => (
                    <div className="aliment">
                        <p className="aliment-text">{name}</p>
                        <img className="aliment-image" src={picture} alt="" />
                        <p className="aliment-text">Quantité : {quantity} {unit}</p>
                        <p className="aliment-text">Date d'expiration : {expiration_date}</p>
                        <p className="aliment-text">Prix : {price}{price_unit}</p>
                    </div>))}
            </div>
        </div>
    );
}

export default Fridge;