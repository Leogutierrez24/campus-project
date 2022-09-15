import {React, useState} from "react";
import Modal from "../modal/Modal";
import SigninForm from "../signinForm/SigninForm";

const SigninFormContainer = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  return (
    <>
      <SigninForm props={handleOpenModal} />
      {
              (showModal) ? <Modal props={setShowModal}><p>¡Cuenta registrada con éxito!</p></Modal> : null
      }
    </>
  );
};

export default SigninFormContainer;