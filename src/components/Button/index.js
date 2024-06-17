import React from 'react';
import '../../assets/sass/button.css'
import PropTypes from 'prop-types';

const Button = ({ text, onClick, buttonDisabled }) => {
    return (
        <button 
        onClick={onClick}
        disabled={buttonDisabled}>
        {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    buttonDisabled: PropTypes.bool.isRequired,
};

export default Button;
