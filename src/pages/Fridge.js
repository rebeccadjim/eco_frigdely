import { fridge } from "../data/fridge";
import { useParams } from "react-router-dom";
import '../styles/Fridge.css';
import FridgeForm from "../components/FridgeForm/FridgeForm";
import FridgeFilter from "../components/FridgeFilter/FridgeFilter";

function Fridge({ filters }) {
    return (
        <div className="fridge-page-container">
            <div className="fridge-page-deco">
                <p className="your-fridge">Your fridge</p>
                <div className="fridge-trait"><hr /></div>
            </div>
            <div className="fridge-page-content">
                <div className="search-aliment-fridge">
                    <FridgeFilter />
                </div>
                <div className="aliment-content">
                    {fridge.map(({ name, quantity, unit, expiration_date, price, price_unit, picture }) => (
                        <div className="aliment">
                            <div className="aliment-image-area">
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
                <div className="fridge-form">
                    <FridgeForm></FridgeForm>
                </div>
                {/* <div className="vertical-line-left"></div>
                <div className="vertical-line-right"></div> */}
            </div>
        </div>
    );
}

export default Fridge;