import { React } from "react";
import "./signinForm.scss";

const SigninForm = ({ props }) => {
    const createAccount = (e) => {
        e.preventDefault();
        props();
    }
    return(
        <form className="signin-form">
            <label htmlFor="email">Email
                <input type="email" name="" id="email" className="inputForm" />
            </label>
            <label htmlFor="idNumber">Número de Legajo
                <input type="text" name="" id="idNumber" className="inputForm" />
            </label>
            <label htmlFor="sign-pass">Contraseña
                <input type="password" name="" id="sign-pass" className="inputForm" />
            </label>
            <input type="password" className="inputForm" placeholder="Confirme su contraseña" />
            <button className="signin-btn" onClick={createAccount}>Confirmar</button>
        </form>
    );
}

export default SigninForm;