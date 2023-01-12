import React from "react";
import "./dataList.scss";

const DataList = ({props}) => {
    return(
        <>
            <ul className="userInfo-list">
                <li className="userInfo-item">Nombre: {props.name}</li>
                <li className="userInfo-item">Apellido: {props.surname}</li>
                <li className="userInfo-item">N° de legajo: {props.nFile}</li>
            </ul>
            <h3 className="userProfile-subtitle">Información adiccional</h3>           
            <ul className="userInfo-list">
                <li className="userInfo-item">Domicilio: {props.adress}</li>
                <li className="userInfo-item">N° de telefono: {props.telephone}</li>
                <li className="userInfo-item">Email personal: {props.email}</li>
            </ul>
        </>
    );
}

export default DataList;