import { React } from "react";
import Materia from "../materia/Materia";
import Loader from "../loader/Loader";
import { useGetSubjects } from "./hooks/useGetSubjects";
import "./materias.scss";

const Materias = () => {
    const { loading, subjects } = useGetSubjects();
    return(
        <div className="subjects-container">
            <h3 className="subjects-title">Mis asignaturas</h3>
            <div className="user-subjects">
                {
                    (loading) ? <Loader /> : <Materia asignaturas={subjects} />
                }
            </div>
       </div>
    );
}

export default Materias;