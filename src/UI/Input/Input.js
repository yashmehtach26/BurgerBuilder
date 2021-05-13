import React from 'react';
import './Input.css'

const Input = (props) => {
    let inputElement = null;
    let cls = null;
    if(props.isValid && props.touched){
        cls = "Valid";
    }
    else if(props.touched && !props.isValid){
        cls="Invalid";
    }
    else {
        cls="Valid";
    }
    switch (props.elementType) {
        case 'input':
            inputElement = <input className={cls} {...props.elementConfig} value={props.value} onChange={props.changed}/>
            break;
        case 'textarea':
            inputElement = <textrarea className={cls} {...props.elementConfig} value={props.value} onChange={props.changed}/>
            break;
        case 'select':
            inputElement = (
                <div>
                    <label>Delivery Mode</label>
                    <select className={cls} value={props.value} onChange={props.changed}>
                        {props.elementConfig.options.map(
                            (option) => {
                                return (
                                    <option key={option.value} value={option.value}>
                                        {option.displayValue}
                                    </option>
                                );
                            }
                        )}

                    </select>
                </div>
            );

            break;
        default:
            inputElement = <input {...props.elementConfig} value={props.value} />
    }
    return (
        <div>
            <label>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default Input;