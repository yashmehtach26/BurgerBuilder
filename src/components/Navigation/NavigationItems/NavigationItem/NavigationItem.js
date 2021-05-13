import React from  'react';
import './NavigationItem.css'
import {NavLink} from 'react-router-dom'

const NavigationItem = (props) => {
    //console.log(props.children);
    return(
        <li className="NavigationItem">
            <NavLink exact to={props.link}>
                {props.children}
            </NavLink>
        </li>
    );
}

export default NavigationItem