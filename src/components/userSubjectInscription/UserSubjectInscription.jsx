import React from "react";
import UserSubjectInscriptionList from "../userSubjectInscriptionList/UserSubjectInscriptionList";
import { useGetSubjectInscription } from "../hooks/useGetSubjectInscription";
import Loader from "../loader/Loader";

const UserSubjectInscription = () => {
    const { userSubjectInscription, loading } = useGetSubjectInscription();

    return(
        <div>
            {
                (loading) ? <Loader /> : <UserSubjectInscriptionList userInscription={userSubjectInscription} />
            }
        </div>
    );
}

export default UserSubjectInscription;