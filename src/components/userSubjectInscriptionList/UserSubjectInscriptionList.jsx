import React, { useState } from "react";
import { ContextUser } from "../context/UserContext";
import db from "../firebase/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { Table, TableHead, TableBody } from "../tables/Tables";
import { useGetInscription } from "../hooks/useGetInscription";
import Modal from "../modal/Modal";

const UserSubjectInscriptionList = ({ userInscription }) => {
    const [openModal, setOpenModal] = useState(false);
    const { userLogged } = ContextUser();
    const [inscriptionName, setInscriptionName] = useState("");
    const { document: userSubjectInscription } = useGetInscription("usersSubjectsInscriptions");

    const handleOpenModal = (name) => {
        setOpenModal(true);
        setInscriptionName(name);
    }

    const handleCloseModal = () => setOpenModal(false);

    const updateInscriptions = async (updatedDoc) => {
        const inscriptionRef = doc(db, "usersSubjectsInscriptions", userLogged.nFile);
        await updateDoc(inscriptionRef, {
            userInscription: updatedDoc
        });
    }

    const deleteSubjectInscription = () => {
        const newInscriptions = userSubjectInscription.filter(e => e.name !== inscriptionName);
        updateInscriptions(newInscriptions);
        handleCloseModal();
    }

    return(
        <>
        {
            (userInscription?.length !== 0)
                ? <Table>
                <TableHead>
                    <th>Asignatura</th>
                    <th>Comisión</th>
                    <th>Modalidad</th>
                    <th>Horario</th>
                    <th>Campus</th>
                    <th>Docente</th>
                </TableHead>
                <TableBody>
                    {
                    userInscription?.map((inscription) => {
                        return(
                            <tr key={inscription.commission}>
                                <td>{inscription.name}</td>
                                <td>{inscription.commission}</td>
                                <td>{inscription.modality}</td>
                                <td>{inscription.hour}</td>
                                <td>{inscription.campus}</td>
                                <td>{inscription.professor}</td>
                                <td>
                                    <button onClick={() => handleOpenModal(inscription.name)}>
                                        cancelar
                                    </button>
                                </td>
                            </tr>
                        )
                    }) 
                    }
                </TableBody>
            </Table>
                : <p>No tienes inscripciones a materias</p>
        }
        {
            openModal && <Modal handleCloseModal={handleCloseModal}>
                <p>Por favor, confirma que quieres desincribirte de este exámen:</p>
                <button onClick={deleteSubjectInscription}>Aceptar</button>
                <button onClick={handleCloseModal}>Cancelar</button>
            </Modal>
        }
        </>
    );
}

export default UserSubjectInscriptionList;