import React from 'react';
import './BuildControl.css'

const BuildControl = (props) =>{
    //console.log(props.disabled);
    return(
        <div className="BuildControl">
            <div className="Label">{props.label}</div>
            <button className="More" onClick={props.add} >More</button>
            <button className="Less" onClick={props.remove} disabled={props.disabled}>Less</button>
            <div className="Label">&#8377;{props.price}/piece</div>
        </div>
    );
}

export default BuildControl;