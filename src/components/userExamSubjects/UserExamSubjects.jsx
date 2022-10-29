import React from "react";
import { useGetInscriptions } from "../hooks/useGetInscriptions";
import UserExamsTable from "../userExamsTable/UserExamsTable";
import Loader from "../loader/Loader";

const UserExamSubjects = () => {
    const { userExams, loading } = useGetInscriptions();
    return(
        <div>
            {
                (loading) ? <Loader /> : <UserExamsTable props={userExams} />
            }
        </div>
    );
}

export default UserExamSubjects;