import React from "react";
import "./tables.scss";

export const Table = ({children, nameClass}) => {
    return(
        <table className={(nameClass === undefined || nameClass === "") ? "tableContainer" : `tableContainer ${nameClass}`}>
            {children}
        </table>
    );
}

export const TableHead = ({children, nameClass}) => {
    return(
        <thead className={(nameClass === undefined || nameClass === "") ? "tableHeader" : `tableHeader ${nameClass}`}>
            <tr className="tableHeader-row">
                {children}
            </tr>
        </thead>
    );
}

export const TableBody = ({children, nameClass}) => {
    return(
        <tbody className={(nameClass === undefined || nameClass === "") ? "tableBody" : `tableBody ${nameClass}`}>
            {children}
        </tbody>
    );
}