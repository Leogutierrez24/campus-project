import {React} from "react";
import LoginForm from "../loginForm/LoginForm";
import SigninForm from "../signinForm/SigninForm";
import "./loginContainer.scss";

const LoginContainer = () => {
    return(
        <div className="login">
            <div className="form-container">
                <div className="login-container">
                    <h3 className="login-title">Iniciar sesión</h3>
                    <LoginForm />
                </div>
                <div className="signin-container">
                    <h3 className="signin-title">Registrarme en el campus</h3>
                    <SigninForm />
                </div>
            </div>
        </div>
    );
};

export default LoginContainer;