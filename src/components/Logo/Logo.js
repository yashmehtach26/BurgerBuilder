import React from 'react';
import BurgerLogo from '../../assets/images/burger-logo.png';
import './Logo.css';

const Logo = (props) => {
    return(
        <div className="Logo" style={{height: props.height}}>
            <img src={BurgerLogo} alt="Burgeroz" onClick={props.click}/>
            <figcaption>{props.caption}</figcaption>
        </div>
    );
}
export default Logo;