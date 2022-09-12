import { React } from "react";

const GradesTable = () => {
    return(
        <table className="grades-table">
            <thead className="grades-table__header">
                <tr className="grades-table__header-container">
                    <th className="grades-table__header-element">Código</th>
                    <th className="grades-table__header-element">Materia</th>
                    <th className="grades-table__header-element">Nota</th>
                    <th className="grades-table__header-element">Estado de la materia</th>
                    <th className="grades-table__header-element">Fecha</th>
                </tr>
            </thead>
            <tbody className="grades-table__body">
                <tr className="grade-row">
                    <td className="grade-element">01</td>
                    <th className="grade-element">Física e Introducción a la biofísica</th>
                    <th className="grade-element">8</th>
                    <th className="grade-element">Aprobada</th>
                    <th className="grade-element">19/07/2017</th>
                </tr>
                <tr>
                    <td className="grade-element">01</td>
                    <th className="grade-element">Física e Introducción a la biofísica</th>
                    <th className="grade-element">8</th>
                    <th className="grade-element">Aprobada</th>
                    <th className="grade-element">19/07/2017</th>
                </tr>
            </tbody>
        </table>
    );
}

export default GradesTable;