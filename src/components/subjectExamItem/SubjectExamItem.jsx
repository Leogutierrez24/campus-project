import {React, useRef} from "react";
import ExamsList from "../examsList/ExamsList";
import downArrow from "../assets/icons/arrow-down-circle.svg";
import "./subjectExamItem.scss";

const SubjectExamItem = () => {
    const divRef = useRef(null);


    const handleToggableDiv = () => {
        divRef.current.classList.toggle("showContent");
    }

    return(
        <div className="subjectExamItem" ref={divRef}>
            <div className="subjectExamItem-header">
                <p className="subjectName">Introducción al pensamiento científico</p>
                <button className="openTable-btn" onClick={handleToggableDiv}>
                    <img src={downArrow} alt="abrir" className="arrowImg" />
                </button> 
            </div>
            <ExamsList />
        </div>
    )
}

export default SubjectExamItem;