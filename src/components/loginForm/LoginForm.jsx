import { React, useState} from 'react';
import { ContextUser } from "../context/UserContext";
import "./loginForm.scss";

const LoginForm = () => {
  const { loginUser } = ContextUser();
  const [mailInput, setMailInput] = useState("");
  const [passwordInput, setpasswordInput] = useState("");

  const handleMailInput = (e) => {
    setMailInput(e.target.value);
  }

  const handlePasswordInput = (e) => {
    setpasswordInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(mailInput)
    console.log(passwordInput)
    loginUser(mailInput, passwordInput);
  }
  return (
    <form className="login-form">
        <input type="mail" placeholder="Email" name="user" id="user" className="inputForm" onChange={handleMailInput} />
        <input type="password" name="password" id="log-pass" className="inputForm" placeholder="contraseña" onChange={handlePasswordInput}/>
        <button className="login-btn" onClick={handleSubmit}>Ingresar</button>
    </form>
  )
}

export default LoginForm