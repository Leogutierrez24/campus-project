import {React, useState} from "react";
import Modal from "../modal/Modal";
import SigninForm from "../signinForm/SigninForm";

const SigninFormContainer = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  return (
    <>
      <SigninForm props={handleOpenModal} />
      {
              (openModal) ? <Modal handleCloseModal={handleCloseModal}><p>¡Cuenta registrada con éxito!</p></Modal> : null
      }
    </>
  );
};

export default SigninFormContainer;