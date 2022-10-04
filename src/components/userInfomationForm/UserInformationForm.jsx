import { React, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import db from "../firebase/firebaseConfig";
import { useGetUserData } from "../hooks/useGetUserData";
import "./userInformationForm.scss";

const UserInformationForm = ({handleInfoForm}) => {
    const [inputAdress, setInputAdress] = useState("");
    const [inputTel, setInputTel] = useState("");
    const [inputMail, setInputMail] = useState("");
    // const [errorMessage, setErrorMessage] = useState("");
    const [buttonStatus, setButtonStatus] = useState(false);
    const { userInfo } = useGetUserData();

    const handleInputAdress = e => setInputAdress(e.target.value);
    const handleInputTel = e => setInputTel(e.target.value);
    const handleInputMail = e => setInputMail(e.target.value);

    const sendUpdatedInfo = async (formData) => {
        await updateDoc(doc(db, "userData", userInfo.id), formData);
    }

    const handleChangeButton = (e) => {
        e.preventDefault();
        setButtonStatus(true);
        const formData = {
            adress: inputAdress,
            telephone: inputTel,
            email: inputMail 
        }
        sendUpdatedInfo(formData);
        setInputAdress("");
        setInputTel("");
        setInputMail("");
        // handleInfoForm(false);
        setButtonStatus(false);
    }

    const handleCancelButton = (e) => {
        e.preventDefault();
        handleInfoForm(false);
    }



    return(
        <div className="userInformationForm-container">
            <form action="" className="userInformationForm">
                <h3 className="formSubtitle">Información adicional</h3>
                <label htmlFor="adress" className="inputReference"><span>Domicilio</span><input className="inputForm" type="text" id="adress" value={inputAdress} onChange={handleInputAdress} /></label>
                <label htmlFor="telNumber" className="inputReference"><span>N° de telefono</span><input className="inputForm" type="text" id="telNumber" value={inputTel} onChange={handleInputTel} /></label>
                <label htmlFor="personalEmail" className="inputReference"><span>Email personal</span><input className="inputForm" type="email" name="" id="personalEmail" value={inputMail} onChange={handleInputMail} /></label>
                {/* <p>{errorMessage}</p> */}
                <div className="buttons-container">
                    <button className="changeButton"  disabled={buttonStatus} onClick={handleChangeButton}>Modificar</button>
                    <button className="cancelButton" disabled={buttonStatus} onClick={handleCancelButton}>Cancelar</button>
                </div>
            </form>
        </div>
    );
}

export default UserInformationForm;