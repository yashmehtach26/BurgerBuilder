import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './Sidebar.css'
import BackDrop from '../../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxilliary';

const Sidebar = (props) => {
    //console.log(props.show);
    let sidebarClasses = 'Sidebar Open';
    if(props.show === false){
        sidebarClasses = 'Sidebar Close'
    }
    return (
        <Aux>
            <BackDrop hideModal={props.handle} show={props.show}/>
            <div className={sidebarClasses}>
                <Logo height="11%" caption="Burgero!!" />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}

export default Sidebar;