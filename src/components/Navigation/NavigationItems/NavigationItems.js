import React from  'react';
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => {
    return(
        <ul className="NavigationItems">
            <NavigationItem link="/" active>Burger Builder</NavigationItem> 
            <NavigationItem link="/orders">My Orders</NavigationItem> 
            <NavigationItem link="/auth">Authenticate</NavigationItem>
        </ul>
    );
}

export default NavigationItems