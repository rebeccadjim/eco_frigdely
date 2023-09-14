import { fridge } from "../data/fridge";
import { useParams } from "react-router-dom";
import '../styles/Fridge.css';
import FridgeForm from "../components/FridgeForm/FridgeForm";
import FridgeFilter from "../components/FridgeFilter/FridgeFilter";
import FridegAliment from "../components/FridgeAliment/FridgeAliment";

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
                <div className="aliments-content">
                    <FridegAliment/>
                </div>
                <div className="fridge-form">
                    <FridgeForm/>
                </div>
            </div>
        </div>
    );
}

export default Fridge;