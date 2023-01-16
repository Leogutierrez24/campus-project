import React from "react";
import UserSubjectInscriptionList from "../userSubjectInscriptionList/UserSubjectInscriptionList";
import { useGetInscription } from "../hooks/useGetInscription";
import Loader from "../loader/Loader";

const UserSubjectInscription = () => {
    const { document: userSubjectInscription, loading, error } = useGetInscription("usersSubjectsInscriptions");

    return(
        <div>
            {error && <p>Algo fallo!!!</p>}
            {loading ? <Loader /> : <UserSubjectInscriptionList userInscription={userSubjectInscription} />}
            {(!loading && userSubjectInscription?.length === 0) && <p>No hay subscripciones a materias</p>} 
        </div>
    );
}

export default UserSubjectInscription;