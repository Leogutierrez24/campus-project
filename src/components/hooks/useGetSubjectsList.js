import {useState, useEffect} from "react";
import { ContextUser } from "../context/UserContext";
import db from "../firebase/firebaseConfig";
import {collection, getDocs} from "firebase/firestore";
import { useGetInscription } from "./useGetInscription";

export const useGetSubjectsList = () => {
    const [subjectItem, setSubjectItems] = useState();
    const [loading, setLoading] = useState(false);
    const { userLogged } = ContextUser();
    const { document: userSubjectInscription } = useGetInscription("usersSubjectsInscriptions");

    useEffect(() => {
        setLoading(true);
        const getSubjects = async () => {
            if(userLogged.nFile !== null){
                let allSubjects = [];
                let subjectsToShow = [];

                const querySnapshot = await getDocs(collection(db, "subjectsInscriptions"));
                querySnapshot.forEach((item) => {
                    allSubjects.push({...item.data()});
                });

                let subjectsByYear = allSubjects.filter(subject => subject.year === userLogged.status);

                if(userSubjectInscription?.length > 0){
                    subjectsByYear.forEach((element) => {
                        let result = userSubjectInscription.some(subject => subject.name === element.name);                
                        if(result === false){
                            subjectsToShow.push(element);
                        }                    
                    });
                } else {
                    subjectsToShow = subjectsByYear
                }

                setSubjectItems(subjectsToShow);
            }
            setLoading(false);
        }

        getSubjects();

    }, [userLogged.nFile, userLogged.status, userSubjectInscription]);

    return {subjectItem, loading};
}