import { React } from "react";
import "./gradesTable.scss";

const GradesTable = () => {
    return(
        <table className="grades-table">
            <thead className="grades-table__header">
                <tr className="grades-table__header-container">
                    <th className="header-element__cod">Código</th>
                    <th className="header-element__subject">Materia</th>
                    <th className="header-element__calif">Nota</th>
                    <th className="header-element__status">Estado de la materia</th>
                    <th className="header-element__date">Fecha</th>
                </tr>
            </thead>
            <tbody className="grades-table__body">
                <tr className="grade-row">
                    <td className="grade-element">01</td>
                    <td className="grade-element">Física e Introducción a la biofísica</td>
                    <td className="grade-element">8</td>
                    <td className="grade-element">Aprobada</td>
                    <td className="grade-element">19/07/2017</td>
                </tr>
                <tr className="grade-row">
                    <td className="grade-element">01</td>
                    <td className="grade-element">Física e Introducción a la biofísica</td>
                    <td className="grade-element">8</td>
                    <td className="grade-element">Aprobada</td>
                    <td className="grade-element">19/07/2017</td>
                </tr>
            </tbody>
        </table>
    );
}

export default GradesTable;