import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label:"Salad", type:"salad"},
    {label:"Bacon", type:"bacon"},
    {label:"Cheese", type:"cheese"},
    {label:"Meat", type:"meat"}
]

const BuildControls = (props) => {
    //console.log(props.orderNowDisabled);
    return(
        <div className="BuildControls">
            <p>Price: &#8377; {props.price}</p>
            {controls.map(
                (ctrl) =>{
                    return(
                        <BuildControl label={ctrl.label} 
                                      key={ctrl.type}
                                      remove={()=>props.remove(ctrl.type)}
                                      add={()=>props.add(ctrl.type)} 
                                      disabled={props.disabled[ctrl.type]}
                                      price={props.ingPrices[ctrl.type]} />
                    );
                }
            )}
            <button className="OrderButton" 
                    disabled={props.orderNowDisabled}
                    onClick={props.showModal} >
                Order Now
            </button>
        </div>
    );
}

export default BuildControls;