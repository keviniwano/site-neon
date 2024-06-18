import React from 'react';
import '../../assets/sass/button.css'

const Button = ({ text, onClick, buttonDisabled, buttonType }) => {
    return (
        <button 
        type={buttonType}
        onClick={onClick}
        disabled={buttonDisabled}
        className='genericbutton'
        >
        {text}
        </button>
    );
};

export default Button;
