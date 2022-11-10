import React from "react";
import ToggleDiv from "../toggleDiv/ToggleDiv";
import SubjectList from "../subjectList/SubjectList";
import downArrow from "../assets/icons/arrow-down-circle.svg";
import "./subjectListContainer.scss";

const SubjectListContainer = ({code, name, option}) => {
    return(
        <ToggleDiv divClass="subjectListContainer" 
        headerClass="subjectListContainer-header"
        headerTitle={name}
        headerImg={downArrow}>
            <SubjectList options={option} name={name} />
        </ToggleDiv>
    );
}

export default SubjectListContainer;