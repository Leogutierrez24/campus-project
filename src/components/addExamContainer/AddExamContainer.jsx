import { React } from "react";
import "./addExamContainer.scss";
import AddExamSubjects from "../addExamSubjects/AddExamSubjects";
import UserExamSubjects from "../userExamSubjects/UserExamSubjects";

const AddExamContainer = () => {
    return(
        <div className="addExam-container">
            <h3 className="addExam-title">Mis inscripciones</h3>
            <UserExamSubjects />
            <h3 className="addExam-title">Inscripción a finales</h3>
            <AddExamSubjects />
        </div>
    );
}

export default AddExamContainer;