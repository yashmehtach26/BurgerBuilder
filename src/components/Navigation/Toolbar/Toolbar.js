import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = (props) => {
    return(
        <header className="Toolbar">
            <div style={{paddingLeft:"10px"}}>Burgero!!</div>
            <Logo height="80%" caption="" click={props.handle}/>
            <nav className="DesktopOnly">
                <NavigationItems />
            </nav>
            
        </header>
    );
}

export default Toolbar;
