import {useParams } from "react-router-dom";
import './FridgeForm.css';
import { useRef} from "react";
import { useState } from "react";

function FridgeForm () {
    
    // const[alimentName,setAlimentName]=useState([])
    // const[alimentQuantity,setAlimentQuantity]=useState([])
    // const[alimentPrice,setAlimentPrice]=useState([])
    // const[alimentDate,setAlimentDate]=useState([])
    // const[alimentURL,setAlimentURL]=useState([])

    // const inputRef=useRef()

    // function onSubmit(e){
    //     e.preventDefault()

    //     const value = inputRef.current.value
    //     if (value === "") return
    //     setAlimentName(prev=>{
    //         return[...prev, value]
    //     })
    //     inputRef.current.value=""
    // }

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
                    <span>Image URL</span>
                    <div>
                        <input type='text' id='name' value='' />
                    </div>
                    <br />
                </div>
            </div>
            <div className="form-button-area">
                <button className="form-button" type="submit">Add !</button>
            </div>
        </div>
    );
}

export default FridgeForm;