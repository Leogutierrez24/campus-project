import { React } from "react";
import { Link } from "react-router-dom";
import LoginFormContainer from "../loginFormContainer/LoginFormContainer";
import SigninFormContainer from "../signinFormContainer/SigninFormContainer";
import "./accountLogin.scss";

const LoginContainer = () => {
    return(
        <div className="login">
            <div className="form-container">
                <div className="login-container">
                    <h3 className="login-title">Iniciar sesión</h3>
                    <LoginFormContainer />
                    <Link to="#" className="help-links">Olvide mi contraseña</Link>
                    <Link to="/" className="help-links">Volver al inicio</Link>
                </div>
                <div className="signin-container">
                    <h3 className="signin-title">Registrarme en el campus</h3>
                    <SigninFormContainer />
                </div>              
            </div>
        </div>
    );
};

export default LoginContainer;