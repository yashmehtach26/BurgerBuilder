import React, { Component } from 'react';
import { withRouter, Link, Route } from 'react-router-dom';
import './Order.css';
import Aux from '../../../hoc/Auxilliary';
import ViewDetails from '../../ViewDetails/ViewDetails';

class Order extends Component {

    state = {
        details: false,
        order: false
    }
    viewDetailshandler = () => {
        //console.log("hi");
        this.setState({ details: !this.state.details })
        //console.log(this.state.details);        
    }
    componentDidUpdate(){
        //console.log("update");
        if(!this.state.details && "/orders/" + this.props.order.id === this.props.location.pathname){
            this.props.history.push('/orders');
        }
    }
    render() {
        //console.log(this.props);
        let r = null;
        if ("/orders/" + this.props.order.id === this.props.location.pathname && this.state.details) {
            //console.log("Hello");
            r = (<Route path={"/orders/:id"} render={() => (<ViewDetails order={this.props.order} show={this.state.details} />)} />);
        }

        let ingArray = [];
        if(this.props.order.ingredients){
            Object.keys(this.props.order.ingredients).map(
                (ingredient) => (
                    ingArray.push(ingredient+"("+this.props.order.ingredients[ingredient]+")")
                )
            );
        }
        
        //console.log(ingArray);
        let ing = ingArray.map(
            (i) => (
                <span key={i}>{i}</span>
            )
        )

        return (
            <Aux>
                <Link to={"/orders/" + this.props.order.id}>
                    <div className="Order tooltip" onClick={this.viewDetailshandler}>
                        <p>Order Id: {this.props.order.id}</p>
                        <p style={{fontSize:"1.2rem"}}>Price: &#8377;{this.props.order.price}</p>
                        <p>Ingrdients: {ing}</p>
                        <span className="tooltiptext">Click to view Order Details</span>
                    </div>
                    {r}
                </Link>
            </Aux>
        );
    }

}

export default withRouter(Order);