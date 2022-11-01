import React from "react";
import "./contentContainer.scss";

export const ContentContainer = ({children}) => {
    return(
        <div className="contentContainer">
            {children}
        </div>
    );
}

export const ContentTitle = ({titleText}) => {
    return(
        <h3 className="contentTitle">{titleText}</h3>
    );
}