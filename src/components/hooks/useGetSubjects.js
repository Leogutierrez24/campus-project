import { useEffect, useState } from "react";
import { getDocs, collection, where, query } from "firebase/firestore";
import db from "../firebase/firebaseConfig";
import { ContextUser } from "../context/UserContext";

export const useGetSubjects = () => {
    const [loading, setLoading] = useState(false);
    const [subjects, setSubjects] = useState();
    const { userLogged } = ContextUser();
    
    useEffect(() => {
        setLoading(true);
        const getUserSubjects = async () => { // for some reason trying to get by one document does not work
            if(userLogged.nFile !== undefined){
                const q = query(collection(db, "userSubjects"), where("nFile", "==", userLogged.nFile));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((document) => {
                    setSubjects(document.data().subjects);
                });                
                setLoading(false);
            }
        }
        getUserSubjects();
    }, [userLogged]);
    return { loading, subjects };
}