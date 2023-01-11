import { React, useState } from "react";
import Modal from "../modal/Modal";
import { Link } from "react-router-dom";
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
                                    <p className="subject-title">{item.name}</p>
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
                                    ?   <Modal handleCloseModal={handleCloseModal}>
                                            <section className="subjects-info-container">
                                                <p className="subjects-info-text">Ante dudas sobre la materia respecto a asuntos administrativos podes acercarte a la oficina de administración en la sede que cursas o comunicate en: <Link to="#" className="subject-info__link">administracion@fmed.com.ar</Link>.</p>
                                            </section>
                                        </Modal>
                                    :   null
                                }    
                            </div>
                        )
                    })
        }
    </>
    );
}

export default Subject;