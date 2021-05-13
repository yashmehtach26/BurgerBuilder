import React, { Component } from 'react';
import Aux from '../../hoc/Auxilliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import axios from '../../axios-order';
import Spinner from '../../UI/Spinner/Spinner';
//import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const ING_PRICES = {
    "bacon": 75,
    "meat": 155,
    "salad": 55,
    "cheese": 35
}

let orderNowDisabled = true;

class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        price: 20,
        showModal: false,
        loading: false,
        error: null
    }

    componentDidMount() {
        axios.get('https://burger-builder-91ba1.firebaseio.com/Ingredients.json').then(
            (response) => {
                this.setState({ ingredients: response.data });
            }
        );
    }
    addIngHandler = (type) => {
        //console.log(type);
        let ingCount = this.state.ingredients[type];
        let updatedPairs = { ...this.state.ingredients };
        updatedPairs[type] = ingCount + 1;
        this.setState({
            ingredients: updatedPairs
        });
        let currentPrice = this.state.price;
        let newItemPrice = ING_PRICES[type];
        currentPrice = currentPrice + newItemPrice;
        this.setState({ price: currentPrice });

    }

    removeIngHandler = (type) => {
        if (this.state.ingredients[type] !== 0) {
            let ingCount = this.state.ingredients[type];
            let updatedPairs = { ...this.state.ingredients };
            updatedPairs[type] = ingCount - 1;
            this.setState({
                ingredients: updatedPairs
            });
            let currentPrice = this.state.price;
            let newItemPrice = ING_PRICES[type];
            currentPrice = currentPrice - newItemPrice;
            this.setState({ price: currentPrice });
        }
    }

    showModalHandler = () => {
        //console.log("Show Modal");
        this.setState({ showModal: !this.state.showModal })
        orderNowDisabled = false;
    }

    cancelOrderHandler = (cancel) => {
        if (cancel === true) {
            let deleteCount = { ...this.state.ingredients };
            for (let i in deleteCount) {
                deleteCount[i] = 0
            }
            this.setState({
                ingredients: deleteCount,
                showModal: false,
                price: 20
            });
        }
        else {
            this.setState({
                showModal: false
            });
        }
    }

    continueOrderHandler = () => {
        // this.setState({ loading: true })
        // const data = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.price,
        //     customer: {
        //         name: "Yash Mehta",
        //         address: {
        //             streetName: "test street 101",
        //             city: "test city",
        //             state: "test state"
        //         },
        //         email: "test@testmail.com"
        //     },
        //     deliveryMode: "fastest"
        // }
        // axios.post('/orders.json', data).then(
        //     (response) => {
        //         console.log(response);
        //         this.setState({
        //             loading: false,
        //             showModal: false
        //         });
        //     }
        // ).catch(
        //     (error) => {
        //         console.error(error);
        //         this.setState({ loading: false, error: error });
        //     }
        // );
        const queryParams = [];
        for(let i in this.state.ingredients){            
            queryParams.push(encodeURIComponent(i)+"="+encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push("price="+this.state.price)
        //console.log(queryParams);
        const ingString = queryParams.join('&')
        //console.log(ingString)
        this.props.history.push({
            pathname:'/checkout',
            search: '?'+ingString
        });
    }

    render() {
        let disabledButtons = { ...this.state.ingredients };
        let totalIng = 0;
        for (let i in disabledButtons) {
            totalIng += disabledButtons[i];
            disabledButtons[i] = disabledButtons[i] <= 0;
        }

        if (totalIng === 0) {
            orderNowDisabled = true;
        }
        else {
            orderNowDisabled = false;
        }
        if (this.state.showModal === true) {
            orderNowDisabled = true;
        }

        let orderSummary = null;

        
        if (this.state.error) {
            orderSummary = this.state.error.message;
        }

        let dataLoaded = <Spinner />;
        if (this.state.ingredients) {
            dataLoaded = (
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls remove={this.removeIngHandler}
                        add={this.addIngHandler}
                        disabled={disabledButtons}
                        price={this.state.price}
                        ingPrices={ING_PRICES}
                        orderNowDisabled={orderNowDisabled}
                        showModal={this.showModalHandler} />
                </Aux>
            );

            orderSummary = <OrderSummary ing={this.state.ingredients}
            ingPrices={ING_PRICES}
            totalPrice={this.state.price}
            cancel={this.cancelOrderHandler}
            continue={this.continueOrderHandler} 
            showButtons="true"/>;
        }

        if (this.state.loading) {
            orderSummary = <Spinner />;
        }
        return (
            <Aux>
                <Modal show={this.state.showModal} hideModal={this.showModalHandler}>
                    {orderSummary}
                </Modal>
                {dataLoaded}
            </Aux>
        );
    }
}

export default BurgerBuilder;