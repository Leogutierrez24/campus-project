import { React } from "react";

const GradesItems = ({props}) => {
    return(
        <tr className="grade-row">
            <td className="grade-element">{props.code}</td>
            <td className="grade-element">{props.name}</td>
            <td className="grade-element">{props.calif === "0" ? "Final pendiente" : props.calif}</td>
            <td className="grade-element">{props.status ? "Aprobada" : "Pendiente"}</td>
            <td className="grade-element">{props.date}</td>
        </tr>
    );
}

export default GradesItems;