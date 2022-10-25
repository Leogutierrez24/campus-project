import {React} from "react";
import ExamsList from "../examsList/ExamsList";
import downArrow from "../assets/icons/arrow-down-circle.svg";
import ToggleDiv from "../toggleDiv/ToggleDiv";
import "./subjectExamItem.scss";

const SubjectExamItem = ({props}) => {
    return(
        <ToggleDiv divClass = "subjectExamItem" headerClass = "subjectExamItem-header" headerTitle = {props.name} headerImg = {downArrow}>
            <ExamsList options={props} />
        </ToggleDiv>
    )
}

export default SubjectExamItem;