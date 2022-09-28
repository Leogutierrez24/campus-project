import { React } from "react";
import "./userInformation.scss";

const UserInformation = () => {
    return(
        <div className="userProfile-container">
            <h3>Datos de mi cuenta</h3>
            <div className="account-info">
                <ul>
                    <li>Nombre: </li>
                    <li>Apellido: </li>
                    <li>N° de legajo: </li>
                </ul>
            </div>
            <h3>Información adiccional</h3>
            <div>
                <ul>
                    <li>Domicilio: </li>
                    <li>N° de telefono: </li>
                    <li>Email personal: </li>
                </ul>
            </div>
        </div>
    );   
}

export default UserInformation;