import { fridge } from "../../data/fridge";
import { useParams } from "react-router-dom";
import './FridgeAliment.css';

const FridegAliment = () => {
    return (
        <div className="aliment-container">
            <div className="aliment-content">
                {fridge.map(({ name, quantity, unit, expiration_date, price, price_unit, picture }) => (
                    <div className="aliment">
                        <div className="aliment-image-area">a
                            <img className="aliment-image" src={picture} alt="" />
                        </div>
                        <div className="aliment-text-area">
                            <p className="aliment-text">
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
                    </div>))}
            </div>
        </div>
    );
}

export default FridegAliment;