import React, { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import db from "../firebase/firebaseConfig";
import { ContextUser } from "../context/UserContext";
import { useGetInscriptions } from "../hooks/useGetInscriptions";
import Modal from "../modal/Modal";
import "./userExamsTable.scss";

const UserExamsTable = ({props}) => {
    const [inscriptionName, setInscriptionName] = useState("");
    const [handleModal, setHandleModal] = useState(false);
    const { userLogged } = ContextUser();
    const { userExams } = useGetInscriptions();
    
    const handleOpenModal = (name) => {
        setHandleModal(true);
        setInscriptionName(name);
    }

    const handleCloseModal = () => setHandleModal(false);

    const updateInscriptions = async (updatedDoc) => {
        const inscriptionRef = doc(db, "usersExamsInscriptions", userLogged.nFile);
        await updateDoc(inscriptionRef, {
            userInscription: updatedDoc
        });
    }
    
    const deleteExamInscription = () => {
        const newInscriptions = userExams.filter(e => e.name !== inscriptionName);
        updateInscriptions(newInscriptions);
        handleCloseModal();
    }

    return(
        <>
        {
            (props?.length !== 0)
                ? <table className="userExams-table">
                        <thead>
                            <tr>
                                <th>Asignatura</th>
                                <th>Docente</th>
                                <th>Fecha</th>
                                <th>Horario</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props?.map((item) => {
                                    return (
                                        <tr key={item.name}>
                                            <td>{item.name}</td>
                                            <td>{item.professor}</td>
                                            <td>{item.date}</td>
                                            <td>{item.time}</td>
                                            <td>
                                                <button className="cancel-btn" onClick={() => handleOpenModal(item.name)}>
                                                    cancelar inscripción
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                        
                    </table>
                : <p>¡No tienes inscripciones a examenes!</p>
        }
        {(handleModal) 
                            ? <Modal handleCloseModal={handleCloseModal}>
                               <p>Por favor, confirma que quieres desincribirte de este exámen:</p>
                               <button onClick={deleteExamInscription}>Aceptar</button>
                               <button onClick={handleCloseModal}>Cancelar</button>
                            </Modal>
                             : null   }
        </>
    );
}

export default UserExamsTable;