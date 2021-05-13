import React from 'react';
import Burger from '../../Burger/Burger';
import './CheckoutSummary.css';
const CheckoutSummary = (props) => {
    return (
        <div>
            <h1>Please Visit Again!</h1>
            <div>
                <Burger ingredients={props.ingredients}/>
            </div>
            <div className="Total">
                <button className="CancelButton" onClick={props.cancel}>Cancel</button>
                <button className="CancelButton" onClick={props.continue}>Continue</button>
            </div>
        </div>
    );
}
export default CheckoutSummary;