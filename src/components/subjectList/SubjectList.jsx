import React, { useState } from "react";
import db from "../firebase/firebaseConfig";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { ContextUser } from "../context/UserContext";
import Modal from "../modal/Modal";
import { Table, TableBody, TableHead } from "../tables/Tables";
import "./subjectList.scss";

const SubjectList = ({options, name}) => {
    const [openModal, setOpenModal] = useState(false);
    const [inscription, setInscription] = useState({});
    const { userLogged } = ContextUser();

    const handleOpenModal = (name, commission, modality, hour, campus, professor) => {
        setOpenModal(true);
        createInscription(name, commission, modality, hour, campus, professor);
    }

    const handleCloseModal = () => {
        setInscription({});
        setOpenModal(false);
    }

    const createInscription = (inscriptionName, inscriptionCommission, inscriptionModality, inscriptionHour, inscriptionCampus, InscriptionProfessor) => {
        const inscription = {
             name: inscriptionName,
             commission: inscriptionCommission,
             modality: inscriptionModality,
             hour: inscriptionHour,
             campus: inscriptionCampus,
             professor: InscriptionProfessor
        };
        setInscription(inscription);
    }

    const sendInscription = async () => {
        const userInscriptionsRef = doc(db, "usersSubjectsInscriptions", userLogged.nFile);
        await updateDoc(userInscriptionsRef, {
            userInscription: arrayUnion(inscription)
        });
        handleCloseModal();
        setInscription({});
    }

    return(
        <>
        <Table nameClass={"subjectTable"}>
            <TableHead nameClass={"subjectTable-header"}>
                <th>Comisión</th>
                <th>Modalidad</th>
                <th>Horario</th>
                <th>Campus</th>
                <th>Docente</th>
            </TableHead>
            <TableBody nameClass={"subjectTable-body"}>
                {
                    options?.map((option) => {
                        return(
                            <tr className="subjectTable-row" key={option.commission}>
                                <td>{option.commission}</td>
                                <td>{option.modality}</td>
                                <td>{option.hour}</td>
                                <td>{option.campus}</td>
                                <td>{option.professor}</td>
                                <td>
                                    <button className="inscription-btn" onClick={() => {handleOpenModal(name, option.commission, option.modality, option.hour, option.campus, option.professor)}}>
                                        Inscribirme
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </TableBody>
        </Table>
        {
            openModal && <Modal handleCloseModal={handleCloseModal}>
                <div className="modal-body">
                    <p>Estas por inscribirte a:</p>
                    <ul>
                        <li>Materia: {inscription.name}</li>
                        <li>Comisión: {inscription.commission}</li>
                        <li>Modalidad: {inscription.modality}</li>
                        <li>Horario: {inscription.hour}</li>
                        <li>Campus: {inscription.campus}</li>
                        <li>Docente: {inscription.professor}</li>
                    </ul>
                    <button onClick={sendInscription}>Aceptar</button>
                    <button onClick={handleCloseModal}>Cancelar</button>
                </div>
            </Modal>
        }
    </>
    );
}

export default SubjectList;