import { React } from "react";
import "./addSubjects.scss";
import { ContentContainer, ContentTitle } from "../contentContainer/ContentContainer";
import UserSubjectInscription from "../userSubjectInscription/UserSubjectInscription";
import SubjectInscriptionList from "../subjectInscriptionList/SubjectInscriptionList";

const AddSubjects = () => {
    return(
        <ContentContainer>
            <ContentTitle titleText={"Mis inscripciones"} />
            <UserSubjectInscription />
            <ContentTitle titleText={"Inscripciones Abiertas"} />
            <SubjectInscriptionList />
        </ContentContainer>        
    );
}

export default AddSubjects;