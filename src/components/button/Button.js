import React from 'react';

function Button({ type, clickFunction, icon }) {
    return (
        <button type={type} onClick={clickFunction}>
            <img className="tech-icons" src={icon} alt="icon"/>
        </button>
    );
}

export default Button;