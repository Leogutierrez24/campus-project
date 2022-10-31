import React from "react";
import "./tables.scss";

export const Table = ({children}) => {
    return(
        <table className="tableContainer">
            {children}
        </table>
    );
}

export const TableHead = ({children}) => {
    return(
        <thead className="tableHeader">
            <tr>
                {children}
            </tr>
        </thead>
    );
}

export const TableBody = ({children}) => {
    return(
        <tbody className="tableBody">
            {children}
        </tbody>
    );
}