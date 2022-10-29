import React from "react";
import "./userExamsTable.scss";

const UserExamsTable = ({props}) => {
    console.log(props)
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
                                                <button className="cancel-btn">
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
        </>
    );
}

export default UserExamsTable;