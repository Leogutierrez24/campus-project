import { React } from "react";
import "./addExamContainer.scss";
import {ContentContainer, ContentTitle} from "../contentContainer/ContentContainer";
import AddExamSubjects from "../addExamSubjects/AddExamSubjects";
import UserExamSubjects from "../userExamSubjects/UserExamSubjects";

const AddExamContainer = () => {
    return(
        <ContentContainer>
            <ContentTitle titleText={"Mis inscripciones"} />
            <UserExamSubjects />
            <ContentTitle titleText={"Inscripción a finales"} />
            <AddExamSubjects />
        </ContentContainer>
    );
}

export default AddExamContainer;