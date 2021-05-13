import React from 'react';
import './Modal.css';
import Aux from '../../hoc/Auxilliary';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
    //console.log("In Modal")
    return (
        <Aux>
            <Backdrop show={props.show} hideModal={props.hideModal}/>
            <div className="Modal"
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
        </Aux>
    );
}

export default Modal;