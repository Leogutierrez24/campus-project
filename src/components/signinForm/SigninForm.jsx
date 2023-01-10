import { React, useState } from "react";
import { ContextUser } from "../context/UserContext";
import "./signinForm.scss";

const SigninForm = ({ props }) => {
    const [inputName, setInputName] = useState("");
    const [inputSurname, setInputSurname] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputID, setInputID] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [inputCheckPassword, setInputCheckPassword] = useState("");

    const { createUser } = ContextUser();

    const handleInputName = (e) => {
        setInputName(e.target.value);
    }

    const handleInputSurname = (e) => {
        setInputSurname(e.target.value);
    }

    const handleInputEmail = (e) => {
        setInputEmail(e.target.value);
    }

    const handleInputID = (e) => {
        setInputID(e.target.value);
    }

    const handleInputPassword = (e) => {
        setInputPassword(e.target.value);
    }

    const handleInputCheckPassword = (e) => {
        setInputCheckPassword(e.target.value);
    }

    
    const clearAll = () => {
        setInputName("");
        setInputSurname("");
        setInputEmail("");
        setInputPassword("");
        setInputCheckPassword("");
        setInputID("");
    }
    
    const createAccount = (e) => {
        e.preventDefault();
        props();

        const newUser = {
            email: inputEmail,
            name: inputName,
            surname: inputSurname,
            nFile: inputID,
            password: inputPassword,
            avatar: `https://ui-avatars.com/api/?name=${inputName}+${inputSurname}&background=random`,
            status: 0
        };

        createUser(newUser);

        clearAll();
    }


    return(
        <form className="signin-form">
            <label htmlFor="newEmail">Email
                <input type="email" name="" id="newEmail" className="inputForm" value={inputEmail} onChange={handleInputEmail} />
            </label>
            <label htmlFor="newName">Nombre
                <input type="text" name="" id="newName" className="inputForm" value={inputName} onChange={handleInputName} />
            </label>
            <label htmlFor="newSurname">Apellido
                <input type="text" name="" id="newSurname" className="inputForm" value={inputSurname} onChange={handleInputSurname} />
            </label>
            <label htmlFor="idNumber">Número de Legajo
                <input type="text" name="" id="idNumber" className="inputForm" value={inputID} onChange={handleInputID} />
            </label>
            <label htmlFor="sign-pass">Contraseña
                <input type="password" name="" id="sign-pass" className="inputForm" value={inputPassword} onChange={handleInputPassword} />
            </label>
            <input type="password" className="inputForm" placeholder="Confirme su contraseña" value={inputCheckPassword} onChange={handleInputCheckPassword} />
            <button className="signin-btn" onClick={createAccount}>Confirmar</button>
        </form>
    );
}

export default SigninForm;