import React from 'react';
import { withRouter } from 'react-router-dom';
import Burger from '../Burger/Burger';
import './ViewDetails.css';
import OrderSummary from '../OrderSummary/OrderSummary';

const ING_PRICES = {
    "bacon": 75,
    "meat": 155,
    "salad": 55,
    "cheese": 35
}

const ViewDetails = (props) => {
    //console.log(props.show);
    return (
        <div className="ViewDetails">
            <div className="Burger">
            <Burger ingredients={props.order.ingredients} />
            </div>
            
            <div className="Orders">
                <OrderSummary ing={props.order.ingredients}
                    ingPrices={ING_PRICES}
                    totalPrice={props.order.price}
                    showButtons="false" />
            </div>
        </div>
    );
}

export default withRouter(ViewDetails);