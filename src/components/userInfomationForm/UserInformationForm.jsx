import { React } from "react";
import "./userInformationForm.scss";

const UserInformationForm = () => {
    return(
        <div className="userInformationForm-container">
            <form action="" className="userInformationForm">
                <h3 className="formSubtitle">Datos de mi cuenta</h3>
                <label htmlFor="name" className="inputReference"><span>Nombre</span><input type="text" id="name" className="inputForm" /></label>
                <label htmlFor="surname" className="inputReference"><span>Apellido</span><input className="inputForm" type="text" id="surname" /></label>
                <h3 className="formSubtitle">Información adicional</h3>
                <label htmlFor="adress" className="inputReference"><span>Domicilio</span><input className="inputForm" type="text" id="adress" /></label>
                <label htmlFor="telNumber" className="inputReference"><span>N° de telefono</span><input className="inputForm" type="text" id="telNumber" /></label>
                <label htmlFor="personalEmail" className="inputReference"><span>Email personal</span><input className="inputForm" type="email" name="" id="personalEmail" /></label>
                <div className="buttons-container">
                    <button className="changeButton" onClick={(e) => e.preventDefault()}>Modificar</button>
                    <button className="cancelButton" onClick={(e) => e.preventDefault()}>Cancelar</button>
                </div>
            </form>
        </div>
    );
}

export default UserInformationForm;