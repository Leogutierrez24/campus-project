import { React, useState } from "react";
import Modal from "../modal/Modal";
import DotsIcon from "../assets/icons/three-dots.svg";
import "./subject.scss";

const Subject = ({asignaturas}) => {
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
       return(
        <>
            {
                (asignaturas === null || asignaturas === undefined) 
                    ?   <p>No tiene materias asignadas aún.</p>
                    :    asignaturas?.map((item) => {
                            return(
                                <div className="subject-container" key={item.id}>
                                    <div className="subject-header">
                                        <p>{item.name}</p>
                                    </div>
                                    <div className="subject-body">
                                        <p>Comisión: {item.commission}</p>
                                        <p>Horario: {item.hour} hs</p>
                                        <p>Aula: {item.classroom}</p>
                                        <p>Campus: {item.campus}</p>
                                        <p>Modalidad: {item.modality}</p>
                                        <p>Profesor: {item.teacher}</p>
                                    </div>
                                    <div className="subject-footer">
                                        <button className="subject-btn" onClick={handleOpenModal}>
                                            <img src={DotsIcon} alt="info. icono" />
                                        </button>
                                    </div>
                                    { (openModal) 
                                        ? <Modal handleCloseModal={handleCloseModal}><p>Hola</p></Modal>
                                        : null
                                    }    
                                </div>
                            )
                        })
            }
        </>
    );
}

export default Subject;