import { React } from "react";
import GradesTable from "../gradesTable/GradesTable";
import "../calificaciones/calificaciones.scss";

const Calificaciones = () => {
    return(
        <div className="grades-container">
            <h3 className="grades-title">Mis calificaciones</h3>
            <GradesTable />
        </div>
    );
}

export default Calificaciones;