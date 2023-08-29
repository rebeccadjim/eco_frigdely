import { useParams } from "react-router-dom";
import './FridgeForm.css';

const FridgeForm = () => {
    return (
        <div className="form-container">
            <div className="form-title">Add an aliment</div>
            <div className="form-content">
                <div className="form-information">
                    <span>Name</span>
                    <div>
                        <input type='text' id='name' value='' />
                    </div>
                    <br />
                    <span>Quantity</span>
                    <div>
                        <input type='text' id='name' value='' />
                    </div>
                    <br />
                    <span>Expiration date</span>
                    <div>
                        <input type='text' id='name' value='' />
                    </div>
                    <br />
                    <span>Price</span>
                    <div>
                        <input type='text' id='name' value='' />
                    </div>
                    <br />
                </div>
            </div>
        </div>
    );
}

export default FridgeForm;