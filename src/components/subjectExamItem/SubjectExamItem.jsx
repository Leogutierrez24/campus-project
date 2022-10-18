import {React} from "react";
import ExamsList from "../examsList/ExamsList";
import downArrow from "../assets/icons/arrow-down-circle.svg";
import ToggleDiv from "../toggleDiv/ToggleDiv";
import "./subjectExamItem.scss";

const SubjectExamItem = () => {
    return(
        <ToggleDiv {...{divClass: "subjectExamItem"}}>
            <div className="subjectExamItem-header">
                <p className="subjectName">Introducción al pensamiento científico</p>
                <img src={downArrow} alt="Ver más" />
            </div>
            <ExamsList />
        </ToggleDiv>
    )
}

export default SubjectExamItem;