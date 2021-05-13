import React, { Component } from 'react';
import Input from '../../UI/Input/Input';
class Auth extends Component {
    state = {
        orderForm:{
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail:true
                },
                valid: false,
                shouldValidate: true,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 8
                },
                valid: false,
                shouldValidate: true,
                touched: false
            },
        },
        isFormValid:false
    }

    checkValidity = (rules, value, touched) => {
        let isValid = true;
        if(touched){
            if(rules.required){
                isValid = value.trim() !== '' && isValid;
            }
            if(rules.minLength){
                isValid = value.length >= rules.minLength && isValid;
            }
            if(rules.isEmail){
                const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                isValid = pattern.test(value) && isValid;
            }
        }
        return isValid;
    }
    onChangeHandler = (event, control) => {
        console.log('hi');
        const controlForm = {...this.state.orderForm};
        let updatedKey = {...this.state.orderForm[control]};
        //console.log(updatedKey);
        updatedKey.value = event.target.value;
        updatedKey.touched = true;
        updatedKey.valid = this.checkValidity(updatedKey.validation, updatedKey.value, updatedKey.touched);
        controlForm[control] = updatedKey;
        let formValid = true;
        for(let key in controlForm){
            formValid = controlForm[key].valid && formValid
        }
        this.setState({orderForm:controlForm, isFormValid:formValid})
    }
    render() {
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
                <h2>Login</h2>
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

                        LOGIN
            </button>
                </form>
            </div>
        );
        return (
            <div className="Contact">
                {form}
            </div>    
        );
    }
}
export default Auth