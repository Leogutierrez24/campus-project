import { useState, useEffect } from "react";
import db from "../firebase/firebaseConfig";
import {doc, getDoc} from "firebase/firestore";
import { ContextUser } from "../context/UserContext";

export const useGetSubjectInscription = () => {
    const [userSubjectInscription, setUserSubjectInscription] = useState();
    const { userLogged } = ContextUser();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const getUserInscriptions = async () => {
            if(userLogged.nFile !== undefined){
                const docRef = doc(db, "usersSubjectsInscriptions", userLogged.nFile);
                const docSnapshot = await getDoc(docRef);
                if(docSnapshot.exists()) setUserSubjectInscription(docSnapshot.data().userInscription);
                else console.log("No existe ese archivo")
            }
            setLoading(false);
        }

        getUserInscriptions();
    }, [userLogged]);
    
    return { userSubjectInscription, loading }
}