import React, { Component } from "react";
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom'
import ContactData from '../Checkout/ContactData/ContactData';

class Checkout extends Component{
    state = {
        ingredients:{},
        price:0
    }
    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for(let params of query.entries()){
            //console.log(params);
            if(params[0] === "price"){
                //console.log("hi");
                this.setState({price:params[1]})
            }
            else{
                ingredients[params[0]] = +params[1];
            }
            
        }
        this.setState({ingredients:ingredients});
        
    }
    cancelOrderHandler = () => {
        this.props.history.goBack();
    }

    continueOrderHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render(){
        //console.log(this.props.match.path+"/contact-data");
        //console.log(this.state.ingredients);
        //console.log(this.state.price);
        return(
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}
                                 cancel={this.cancelOrderHandler}
                                 continue={this.continueOrderHandler} />
                <Route path={this.props.match.path+"/contact-data"} render={()=>(<ContactData ingredients={this.state.ingredients} price={this.state.price}/>)} />
            </div>
        );
    }
}

export default Checkout;