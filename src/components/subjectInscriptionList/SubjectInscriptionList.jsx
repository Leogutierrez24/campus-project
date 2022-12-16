import React from "react";
import { useGetSubjectsList } from "../hooks/useGetSubjectsList";
import SubjectListContainer from "../subjectListContainer/SubjectListContainer";
import Loader from "../loader/Loader";

const SubjectInscriptionList = () => {
    const { subjectItem, loading } = useGetSubjectsList();
    
    return(
        <>
        {
            (loading)
                ? <Loader />
                :   subjectItem?.map((subject) => {
                        return(
                            <SubjectListContainer key={subject.code} {...subject} />
                        )
                    })
        }
        </>
    );
}

export default SubjectInscriptionList;