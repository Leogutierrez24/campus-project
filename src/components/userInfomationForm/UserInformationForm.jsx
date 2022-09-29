import { React, useState } from "react";
import "./userInformationForm.scss";

const UserInformationForm = ({handleInfoForm}) => {
    const [inputName, setInputName] = useState("");
    const [inputSurname, setInputSurname] = useState("");
    const [inputAdress, setInputAdress] = useState("");
    const [inputTel, setInputTel] = useState("");
    const [inputMail, setInputMail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [buttonStatus, setButtonStatus] = useState(false);

    const handleInputName = e => setInputName(e.target.value);
    const handleInputSurname = e => setInputSurname(e.target.value);
    const handleInputAdress = e => setInputAdress(e.target.value);
    const handleInputTel = e => setInputTel(e.target.value);
    const handleInputMail = e => setInputMail(e.target.value);

    const checkInputsValue = () => {
        if(inputName === ""){
            return false;
        } else if (inputSurname === ""){
            return false;
        } else {
            return true;
        }
    }

    const handleChangeButton = (e) => {
        e.preventDefault();
        setButtonStatus(true); 
        if(checkInputsValue() === false){
            setErrorMessage("Este campo no puede estar vacío");
        } else {
            const formData = {
                name: inputName,
                surname: inputSurname,
                adress: inputAdress,
                telephone: inputTel,
                email: inputMail 
            }
            console.log(formData);
            setInputName("");
            setInputSurname("");
            setInputAdress("");
            setInputTel("");
            setInputMail("");
            // handleInfoForm(false);
        }
        setButtonStatus(false);
    }

    const handleCancelButton = (e) => {
        e.preventDefault();
        handleInfoForm(false);
    }



    return(
        <div className="userInformationForm-container">
            <form action="" className="userInformationForm">
                <h3 className="formSubtitle">Datos de mi cuenta</h3>
                <label htmlFor="name" className="inputReference"><span>Nombre</span><input type="text" id="name" className="inputForm" value={inputName} onChange={handleInputName} /></label>
                <label htmlFor="surname" className="inputReference"><span>Apellido</span><input className="inputForm" type="text" id="surname" value={inputSurname} onChange={handleInputSurname} /></label>
                <h3 className="formSubtitle">Información adicional</h3>
                <label htmlFor="adress" className="inputReference"><span>Domicilio</span><input className="inputForm" type="text" id="adress" value={inputAdress} onChange={handleInputAdress} /></label>
                <label htmlFor="telNumber" className="inputReference"><span>N° de telefono</span><input className="inputForm" type="text" id="telNumber" value={inputTel} onChange={handleInputTel} /></label>
                <label htmlFor="personalEmail" className="inputReference"><span>Email personal</span><input className="inputForm" type="email" name="" id="personalEmail" value={inputMail} onChange={handleInputMail} /></label>
                <p>{errorMessage}</p>
                <div className="buttons-container">
                    <button className="changeButton"  disabled={buttonStatus} onClick={handleChangeButton}>Modificar</button>
                    <button className="cancelButton" disabled={buttonStatus} onClick={handleCancelButton}>Cancelar</button>
                </div>
            </form>
        </div>
    );
}

export default UserInformationForm;