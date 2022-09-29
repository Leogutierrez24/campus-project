import { React } from "react";

const DataList = ({props}) => {
    return(
        <>
            <ul>
                <li className="userInfo-item">Nombre: {props.name}</li>
                <li className="userInfo-item">Apellido: {props.surname}</li>
                <li className="userInfo-item">N° de legajo: {props.id}</li>
            </ul>
            <h3 className="userProfile-subtitle">Información adiccional</h3>           
            <ul>
                <li className="userInfo-item">Domicilio: </li>
                <li className="userInfo-item">N° de telefono: </li>
                <li className="userInfo-item">Email personal: </li>
            </ul>
        </>
    );
}

export default DataList;