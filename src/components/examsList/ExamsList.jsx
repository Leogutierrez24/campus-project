import React, { useState } from "react";
import Modal from "../modal/Modal";
import "./examList.scss";

const ExamsList = ({options}) => {
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
                    {
                        options.map((item) => {
                            return(
                                <tr className="exam-details" key={item.professor}>
                                    <td className="tableBody-element">{item.date}</td>
                                    <td className="tableBody-element">{item.time}</td>
                                    <td className="tableBody-element">{item.professor}</td>
                                    <td className="tableBody-element">
                                        <button className="inscription-btn" onClick={handleOpenModal}>
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