import React from 'react';
import Aux from '../../hoc/Auxilliary';
import './OrderSummary.css';

const OrderSummary = (props) => {
    //console.log("In Order Summary")
    const ingList = (Object.keys(props.ing).map(
        (igKey) => {
            return (
                <tr key={igKey + props.ing[igKey]} >
                    <td>{igKey}</td>
                    <td>{props.ing[igKey]}</td>
                    <td>&#8377;{props.ingPrices[igKey]}</td>
                    <td>&#8377;{props.ing[igKey] * props.ingPrices[igKey]}</td>
                </tr>

            );
        }
    ));
    let but = null;
    if(props.showButtons ==="true"){
        but = (
            <div className="Total">
                <button className="CancelButton"
                    onClick={() => props.cancel(true)}>
                    Cancel Order
                </button>
                <button className="CancelButton"
                    onClick={props.continue}>
                    Continue
                </button>
                <button className="CancelButton"
                    onClick={() => props.cancel(false)}>
                    Add Items
                </button>
            </div>
        );
    }
    return (
        <Aux>
            <h3>Your Order Summary</h3>
            <table className="Table">
                <thead>
                    <tr>
                        <th>Ingredient</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {ingList}
                </tbody>
            </table>
            <div className="Total">
                <p>Total Amount:</p>
                <p>&#8377;{props.totalPrice}</p>
            </div>
            {but}
        </Aux>
    );
}

export default OrderSummary;