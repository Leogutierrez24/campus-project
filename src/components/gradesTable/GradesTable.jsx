import { React } from "react";
import GradesItems from "../gradesItem/GradesItem";
import "./gradesTable.scss";

const GradesTable = ({props}) => {
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
                {
                    props?.map((item) => {
                        return(
                            <GradesItems props={item} key={item.code}/>
                        )
                    })
                }
            </tbody>
        </table>
    );
}

export default GradesTable;