import React from 'react';
import "./loginForm.scss";

const LoginForm = () => {
  return (
    <form className="login-form">
        <input type="mail" placeholder="Email" name="user" id="user" className="inputForm" />
        <input type="password" name="password" id="log-pass" className="inputForm" placeholder="contraseña" />
        <button onClick={e => e.preventDefault()}>Ingresar</button>
    </form>
  )
}

export default LoginForm