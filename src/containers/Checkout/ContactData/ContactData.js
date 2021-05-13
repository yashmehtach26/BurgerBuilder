import React, { Component } from 'react';
import './ContactData.css';
import axios from '../../../axios-order';
import Spinner from '../../../UI/Spinner/Spinner';
import { withRouter } from 'react-router-dom';
import Input from '../../../UI/Input/Input';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Name'
                },
                value: '',
                validation:{
                    required:true
                },
                valid:false,
                shouldValidate:true,
                touched:false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email Address'
                },
                value: '',
                validation:{
                    required:true
                },
                valid:false,
                shouldValidate:true,
                touched:false
            },
            flatNo: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Door No.'
                },
                value: '',
                validation:{
                    required:true
                },
                valid:false,
                shouldValidate:true,
                touched:false
            },
            locality: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Locality'
                },
                value: '',
                validation:{
                    required:true
                },
                valid:false,
                shouldValidate:true,
                touched:false
            },
            city: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'City'
                },
                value: '',
                validation:{
                    required:true
                },
                valid:false,
                shouldValidate:true,
                touched:false
            },
            State: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'State'
                },
                value: '',
                validation:{
                    required:true
                },
                valid:false,
                shouldValidate:true,
                touched:false
            },
            delMode: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value:'fast', displayValue:'Fast'},
                        {value:'standard', displayValue:'Standard'}
                    ]
                },
                value: 'fast',
                validation:{
                    required:true
                },
                valid:true,
                shouldValidate:false,
                touched:false
            }
        },
        isFormValid:false,
        loading: false,
        showModal: false
    }

    checkValidity = (value, rules, touched) => {
        let isValid = true;
        if(touched){
            if(rules.required){
                isValid = value.trim()!=='';
            }
        }
        
        return isValid;
    }
    sendOrderHandler = (event) => {

        //console.log(this.state.delMode);
        event.preventDefault();
        this.setState({ loading: true });
        const formData = {};
        for(let element in this.state.orderForm){
            formData[element] = this.state.orderForm[element].value
        }
        const data = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderDetails: formData
        }
        //console.log(data.customer.address);
        axios.post('/orders.json', data).then(
            (response) => {
                this.props.history.push('/orders');
                this.setState({ loading: false });
            }
        ).catch(
            (error) => {
                console.error(error);
                this.setState({ loading: false, error: error });
            }
        );
    }

    onChangeHandler = (event,inputIdentifier) => {
        const uorderForm = {...this.state.orderForm};
        const updatedKey = {...uorderForm[inputIdentifier]}
        updatedKey.value = event.target.value;
        updatedKey.touched = true;
        updatedKey.valid = this.checkValidity(event.target.value, updatedKey.validation, updatedKey.touched);
        uorderForm[inputIdentifier] = updatedKey;
        this.setState({ orderForm: uorderForm});
        let formValid = true;
        for(let key in uorderForm){
            formValid = uorderForm[key].valid && formValid;
        }
        this.setState({ orderForm: uorderForm, isFormValid:formValid});
        //console.log(this.state.isFormValid)
    }
    
    render() {
        //console.log('hi');
        const elementsArray = [];
        for (let key in this.state.orderForm) {
            elementsArray.push(
                {
                    id: key,
                    config: this.state.orderForm[key]
                }
            );
        }
        //console.log(elementsArray);
        let form = (
            <div className="login-box">
                <h2>Delivery Address</h2>
                <form onSubmit={this.sendOrderHandler}>
                    {elementsArray.map(
                        (e) => {
                            return (
                                <div className="user-box" key={e.id}>
                                    <Input elementType={e.config.elementType} 
                                           elementConfig={e.config.elementConfig} 
                                           value={e.config.value} 
                                           isValid = {e.config.valid}
                                           shouldValidate ={e.config.shouldValidate}
                                           touched = {e.config.touched}
                                           changed={(event) => this.onChangeHandler(event,e.id)} />
                                </div>
                            );
                        }
                    )}
                    <button type="submit" disabled={!this.state.isFormValid}>

                        Order
            </button>
                </form>
            </div>
        );
        if (this.state.loading) {
            form = (<Spinner />);
        }
        return (
            <div className="Contact">
                {form}
            </div>
        );
    }
}
export default withRouter(ContactData);