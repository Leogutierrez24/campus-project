import { React } from "react";

const GradesItems = ({props}) => {
    return(
        <tr className="grade-row">
            <td className="grade-element">{props.id}</td>
            <td className="grade-element">{props.name}</td>
            <td className="grade-element">{props.calif}</td>
            <td className="grade-element">{props.status}</td>
            <td className="grade-element">{props.date}</td>
        </tr>
    );
}

export default GradesItems;