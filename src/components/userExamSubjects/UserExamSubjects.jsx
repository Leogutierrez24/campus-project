import React from "react";
import UserExamsTable from "../userExamsTable/UserExamsTable";
import Loader from "../loader/Loader";
import { useGetInscription } from "../hooks/useGetInscription";

const UserExamSubjects = () => {
    const { document: userExams, loading, error } = useGetInscription("usersExamsInscriptions");

    return(
        <div className="userExamsInscriptions-list">
            {
                (loading) ? <Loader /> : <UserExamsTable props={userExams} />
            }
        </div>
    );
}

export default UserExamSubjects;