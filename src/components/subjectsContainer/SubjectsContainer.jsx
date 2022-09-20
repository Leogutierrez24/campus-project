import { React } from "react";
import Subject from "../subject/Subject";
import Loader from "../loader/Loader";
import { useGetSubjects } from "../hooks/useGetSubjects";
import "./subjectsContainer.scss";

const SubjectsContainer = () => {
    const { loading, subjects } = useGetSubjects();
    return(
        <div className="subjects-container">
            <h3 className="subjects-title">Mis asignaturas</h3>
            <div className="user-subjects">
                {
                    (loading) ? <Loader /> : <Subject asignaturas={subjects} />
                }
            </div>
       </div>
    );
}

export default SubjectsContainer;