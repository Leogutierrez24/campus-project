import React from "react";
import "./closeButton.scss";

const CloseButton = ({btnFunction, children}) => {
    return(
        <button className="close-button" onClick={btnFunction}>
            {children}
        </button>
    );
}

export default CloseButton;