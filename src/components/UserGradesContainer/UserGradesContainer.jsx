import { React } from "react";
import GradesTable from "../gradesTable/GradesTable";
import Loader from "../loader/Loader";
import { useGetGrades } from "../hooks/useGetGrades";
import "./userGradesContainer.scss";

const UserGradesContainer = () => {
    const { gradesList, loading } = useGetGrades();
    return(
        <div className="grades-container">
            <h3 className="grades-title">Mis calificaciones</h3>
            {
                (loading) ? <Loader /> : <GradesTable props={gradesList}/> 
            }
        </div>
    );
}

export default UserGradesContainer;