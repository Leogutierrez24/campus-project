import React from "react";
import "./signinForm.scss";

const SigninForm = () => {
  return (
    <form className="signin-form">
        <label htmlFor="email">Email
            <input type="email" name="" id="email" className="inputForm" />
        </label>
        <label htmlFor="">Número de Legajo
            <input type="text" name="" id="idNumber" className="inputForm" />
        </label>
        <label htmlFor="">Contraseña
            <input type="password" name="" id="sign-pass" className="inputForm" />
        </label>
        <input type="password" className="inputForm" placeholder="Confirme su contraseña" />
        <button>Confirmar</button>
    </form>
  );
};

export default SigninForm;