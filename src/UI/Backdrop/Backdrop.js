import React from 'react'
import './Backdrop.css'

const Backdrop = (props) => {
    return(
        props.show ? <div className="Backdrop" onClick={props.hideModal}></div> : null
    );
}

export default Backdrop;
