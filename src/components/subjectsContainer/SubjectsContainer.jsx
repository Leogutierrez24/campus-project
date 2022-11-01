import React from "react";
import { ContentContainer, ContentTitle } from "../contentContainer/ContentContainer";
import Subject from "../subject/Subject";
import Loader from "../loader/Loader";
import { useGetSubjects } from "../hooks/useGetSubjects";
import "./subjectsContainer.scss";

const SubjectsContainer = () => {
    const { loading, subjects } = useGetSubjects();
    return(
        <ContentContainer>
            <ContentTitle titleText={"Mis asignaturas"} />
            <div className="user-subjects">
                {
                    (loading) 
                        ? <Loader />
                        : <div className="subjects">
                            <Subject asignaturas={subjects} />
                          </div>
                }
            </div>
       </ContentContainer>
    );
}

export default SubjectsContainer;