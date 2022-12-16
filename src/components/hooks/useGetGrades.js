import { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { ContextUser } from "../context/UserContext";
import db from "../firebase/firebaseConfig";

export const useGetGrades = () => {
    const [gradesList, setGradesList] = useState([]);
    const [loading, setLoading] = useState(false);
    const { userLogged } = ContextUser();

    useEffect(() => {
        setLoading(true);
        const getGradesData = async () => {
            if(userLogged.nFile !== undefined){
                const q = query(collection(db, "approvedSubjects"), where("nFile", "==", userLogged.nFile));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((document) => {                                   
                    setGradesList(document.data().subjects);
                });
                setLoading(false);
            }
        }
        getGradesData();
    }, [userLogged]);
    
    return { gradesList, loading };
}