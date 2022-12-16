import {useState, useEffect} from "react";
import { ContextUser } from "../context/UserContext";
import db from "../firebase/firebaseConfig";
import {collection, getDocs} from "firebase/firestore";

export const useGetSubjectsList = () => {
    const [subjectItem, setSubjectItems] = useState();
    const [loading, setLoading] = useState(false);
    const { userLogged } = ContextUser();

    useEffect(() => {
        setLoading(true);
        const getSubjects = async () => {
            if(userLogged.nFile !== null){
                let subjects = [];

                const querySnapshot = await getDocs(collection(db, "subjectsInscriptions"));
                querySnapshot.forEach((item) => {
                    subjects.push({...item.data()});
                });

                setSubjectItems(subjects);
            }
            setLoading(false);
        }

        getSubjects();

    }, [userLogged.nFile]);

    return {subjectItem, loading};
}