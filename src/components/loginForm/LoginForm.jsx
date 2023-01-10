import { React, useState } from "react";
import { ContextUser } from "../context/UserContext";
import "./loginForm.scss";

const LoginForm = () => {
    const { loginUser } = ContextUser();
    const [mailInput, setMailInput] = useState("");
    const [passwordInput, setpasswordInput] = useState("");
    const [inputsError, setInputsError] = useState(false);

    const handleMailInput = (e) => {
        setMailInput(e.target.value);
    }

    const handlePasswordInput = (e) => {
        setpasswordInput(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newError = await loginUser(mailInput, passwordInput);
        setInputsError(newError);
    }

    return(
        <form className="login-form">
            <input type="mail" placeholder="Email" name="user" id="user" className="inputForm" onChange={handleMailInput} />
            <input type="password" name="password" id="log-pass" className="inputForm" placeholder="contraseña" onChange={handlePasswordInput}/>
            <button className="login-btn" onClick={handleSubmit}>Ingresar</button>
            {
                (inputsError) ? <p>El usuario o la contraseña no son correctos</p> : null
            }
        </form>
    );
}

export default LoginForm;