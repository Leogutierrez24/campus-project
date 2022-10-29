import React from "react";
import SubjectExamItem from "../subjectExamItem/SubjectExamItem";
import Loader from "../loader/Loader";
import { useGetExams } from "../hooks/useGetExams";

const AddExamSubjects = () => {
    const {loading, examsData} = useGetExams();
    return(
        <div className="examSubjects">
            {
                examsData !== undefined &&
                    loading === true
                        ? <Loader />
                        : examsData?.map((item) => {
                            return <SubjectExamItem key={item.name} props={item}/>
                        })
                
            }
        </div>
    );
}

export default AddExamSubjects;