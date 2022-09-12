import {React, useState} from "react";
import Modal from "../modal/Modal";
import "./signinForm.scss";

const SigninForm = () => {
  const [showModal, setShowModal] = useState(false);

  const createAccount = (e) => {
    e.preventDefault();
    handleOpenModal();
  }

  const handleOpenModal = () => setShowModal(true);
  return (
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
        {
                (showModal) ? <Modal props={setShowModal}><p>¡Cuenta registrada con éxito!</p></Modal> : null
        }
    </form>
  );
};

export default SigninForm;