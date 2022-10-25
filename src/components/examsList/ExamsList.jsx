import React, { useState } from "react";
import Modal from "../modal/Modal";
import "./examList.scss";

const ExamsList = ({options}) => {
    const [openModal, setOpenModal] = useState(false);
    const [inscription, setInscription] = useState({});

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

    const sendInscription = () => {
        console.log(`Te inscribiste a ${inscription.name}`);
        handleCloseModal();
        setInscription({});
    }

    console.log(inscription)
    return(
        <>
            <table className="examsTable">
                <thead className="examsTable-header">
                    <tr>
                        <th className="tableHeader-element">Fecha</th>
                        <th className="tableHeader-element">Horario</th>
                        <th className="tableHeader-element">Docente</th>
                    </tr>
                </thead>
                <tbody className="examsTable-body">
                    {
                        options.option.map((item) => {
                            return(
                                <tr className="exam-details" key={item.professor}>
                                    <td className="tableBody-element">{item.date}</td>
                                    <td className="tableBody-element">{item.time}</td>
                                    <td className="tableBody-element">{item.professor}</td>
                                    <td className="tableBody-element">
                                        <button className="inscription-btn" onClick={() => handleOpenModal(options.name, item.date, item.time, item.professor)}>
                                            Inscribirme
                                        </button>
                                    </td>
                                </tr>            
                            )
                        })
                    }
                </tbody>
            </table>
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
                                    <button>Cancelar</button>
                                </div>
                            </Modal>     
            }
        </>
    );
}

export default ExamsList;