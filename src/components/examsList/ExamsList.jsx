import React, { useState } from "react";
import Modal from "../modal/Modal";
import "./examList.scss";

const ExamsList = () => {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false); 
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
                    <tr className="exam-details">
                        <td className="tableBody-element">6/10/2022</td>
                        <td className="tableBody-element">19:00 hs</td>
                        <td className="tableBody-element">Mafuyu Kirisu</td>
                        <td className="tableBody-element"><button className="inscription-btn" onClick={handleOpenModal}>Inscribirme</button></td>
                    </tr>
                </tbody>
            </table>
            {
                openModal && <Modal handleCloseModal={handleCloseModal}>
                                <div>
                                    <p>Estas por inscribirte a ...</p>
                                    <button>Aceptar</button>
                                    <button>Cancelar</button>
                                </div>
                            </Modal>     
            }
        </>
    );
}

export default ExamsList;