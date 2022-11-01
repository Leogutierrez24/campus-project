import React from "react";
import UserExamsTable from "../userExamsTable/UserExamsTable";
import Loader from "../loader/Loader";
import { useGetInscriptions } from "../hooks/useGetInscriptions";

const UserExamSubjects = () => {
    const { userExams, loading } = useGetInscriptions();
    return(
        <div className="userExamsInscriptions-list">
            {
                (loading) ? <Loader /> : <UserExamsTable props={userExams} />
            }
        </div>
    );
}

export default UserExamSubjects;