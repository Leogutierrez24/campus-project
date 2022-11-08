import React, { useState } from "react";
import db from "../firebase/firebaseConfig";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { ContextUser } from "../context/UserContext";
import Modal from "../modal/Modal";
import {Table, TableHead, TableBody} from "../tables/Tables";
import "./examList.scss";

const ExamsList = ({options}) => {
    const [openModal, setOpenModal] = useState(false);
    const [inscription, setInscription] = useState({});
    const { userLogged } = ContextUser();

    const handleOpenModal = (name, date, time, professor) => {
        setOpenModal(true);
        createInscription(name, date, time, professor);
    }

    const handleCloseModal = () => {
        setInscription({});
        setOpenModal(false);
    }

    const createInscription = (inscriptionName, inscriptionDate, inscriptionTime, InscriptionProfessor) => {
       const inscription = {
            name: inscriptionName,
            date: inscriptionDate,
            time: inscriptionTime,
            professor: InscriptionProfessor
       };
       setInscription(inscription);
    }

    const sendInscription = async () => {
        const userInscriptionsRef = doc(db, "usersExamsInscriptions", userLogged.nFile);
        await updateDoc(userInscriptionsRef, {
            userInscription: arrayUnion(inscription)
        });
        handleCloseModal();
        setInscription({});
    }
    
    return(
        <>
            <Table nameClass={"examsTable"}>
                <TableHead nameClass={"examsTable-header"}>
                    <th>Fecha</th>
                    <th>Horario</th>
                    <th>Docente</th>
                </TableHead>
                <TableBody nameClass={"examsTable-body"}>
                    {
                        options.option.map((item) => {
                            return(
                                <tr className="examTable-row" key={item.professor}>
                                    <td>{item.date}</td>
                                    <td>{item.time}</td>
                                    <td>{item.professor}</td>
                                    <td>
                                        <button className="inscription-btn" onClick={() => handleOpenModal(options.name, item.date, item.time, item.professor)}>
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
                                        <li>Fecha: {inscription.date}</li>
                                        <li>Horario: {inscription.time}</li>
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

export default ExamsList;