import { fridge } from "../data/fridge";
import { useParams } from "react-router-dom";
import '../styles/Fridge.css';
import FridgeForm from "../components/FridgeForm/FridgeForm";

function Fridge() {
    return (
        <div className="container">
            <div className="fridge-page-deco">
                <p className="your-fridge">Your fridge</p>
                <div className="trait"><hr /></div>
            </div>
            <div className="fridge-page-container">
                <div className="search-aliment-fridge">Search component will be added here</div>
                <div className="aliment-container">
                    <div className="aliment-content">
                        {fridge.map(({ name, quantity, unit, expiration_date, price, price_unit, picture }) => (
                            <div className="aliment">
                                <img className="aliment-image" src={picture} alt="" />
                                <p className="aliment-text">
                                    {name} 
                                    <br/>
                                    <br/>
                                    Quantité : {quantity} {unit} 
                                    <br/>
                                    <br/>
                                    Date d'expiration : {expiration_date} 
                                    <br/>
                                    <br/>
                                    Prix : {price}{price_unit}
                                    </p>
                            </div>))}
                    </div>
                </div>
                <FridgeForm className="fridge-form"></FridgeForm>
                {/* <div className="vertical-line-left"></div>
                <div className="vertical-line-right"></div> */}
            </div>
        </div>
    );
}

export default Fridge;