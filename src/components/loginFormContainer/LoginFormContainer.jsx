import { React } from 'react';
import { Navigate } from 'react-router-dom';
import { ContextUser } from "../context/UserContext";
import LoginForm from "../loginForm/LoginForm";

const LoginFormContainer = () => {
  const { userState } = ContextUser();

  return (
    <>
      <LoginForm />
      {
        (userState) ? <Navigate to="/account/materias" /> : null
      }
    </>
  )
}

export default LoginFormContainer;