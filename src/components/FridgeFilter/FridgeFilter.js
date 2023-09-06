import { useParams } from "react-router-dom";
import './FridgeFilter.css';
import { useState } from "react";
import { useRef } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.module.css';

function FridgeFilter() {

    const [alimentNames, setAlimentNames] = useState([])
    const [alimentQuantity, setAlimentQuantity] = useState([])
    const [alimentPrice, setAlimentPrice] = useState([])
    const [alimentDate, setAlimentDate] = useState()
    const [alimentURL, setAlimentURL] = useState([])

    const [query, setQuery] = useState("")
    const inputRef = useRef()

    const filteredAlimentNames = alimentNames.filter(alimentName => {
        return alimentName.toLowerCase().includes(query.toLowerCase())
    })
    function onSubmit(e) {
        e.preventDefault()

        const value = inputRef.current.value
        if (value === "") return
        setAlimentNames(prev => {
            return [...prev, value]
        })
        inputRef.current.value = ""
    }

    return (
        <div className="filter-container">
            <div className="filter-title">Looking for something ?</div>
            <div className="filter-content">
                <input className="search-box"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    type="search" placeholder="What do you need ?"
                />
                <div className="search-details">
                    <select value={alimentQuantity} id="quantity" onChange={(e) => setAlimentQuantity(e.target.value)}>
                        <option value="">Quantity</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <select value={alimentPrice} id="price" onChange={(e) => setAlimentPrice(e.target.value)}>
                        <option value="">Price</option>
                        <option value="0-5">0-5€</option>
                        <option value="5-10">5-10€</option>
                        <option value="10-20">10-20€</option>
                        <option value="+20">+20€</option>
                    </select>
                    <input className='date-container' type="date" placeholder="Best before" selected={alimentDate} onChange={date => setAlimentDate(date)} />
                </div>
            </div>
        </div>
    );
}

export default FridgeFilter;