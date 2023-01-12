import React from "react";
import "./button.scss";

const Button = ({nameClass, text, action, status}) => {
    return (
        <button 
            className={(nameClass === undefined) ? "btn" : `btn ${nameClass}`}
            onClick={action}
            disabled={(status === undefined ? false : status)}
            >
                {text}
        </button>
    );
}

export default Button;