import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import db from "../firebase/firebaseConfig";
import { ContextUser } from "../context/UserContext";

export const useGetInscriptions = () => {
    const [userExams, setUserExams] = useState();
    const { userLogged } = ContextUser();
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true)
        const getExamInscriptions = async () => {
            if(userLogged.nFile !== undefined){
                const docRef = doc(db, "usersExamsInscriptions", userLogged.nFile);
                const docSnapshot = await getDoc(docRef);
                if(docSnapshot.exists()) setUserExams(docSnapshot.data().userInscription);
                else console.log("No existe ese archivo");
            }
            setLoading(false);
        }

        getExamInscriptions();
    }, [userLogged]);

    return {userExams, loading};
}