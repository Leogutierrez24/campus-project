import {useState, useEffect} from "react";
import db from "../firebase/firebaseConfig";
import {collection, getDocs} from "firebase/firestore";
import { useGetInscriptions } from "./useGetInscriptions";

export const useGetExams = () => {
    const [examsData, setExamsData] = useState([]);
    const [loading, setLoading] = useState(false);
    const { userExams } = useGetInscriptions();

    useEffect(() => {
        setLoading(true);
        const getExamsCollection = async () => {
            let exams = [];
            const querySnapshot = await getDocs(collection(db, "examsInscriptions"));
            querySnapshot.forEach((doc) => {
                exams.push({...doc.data()});
            });

            if(userExams?.length > 0){
                let inscriptionsToShow = exams;
                for(let i = 0; i < userExams.length; i++){
                    let elementResult = exams.find(e => e.name === userExams[i].name);
                    if(elementResult !== undefined) inscriptionsToShow = inscriptionsToShow.filter(e => e.name !== elementResult.name);
                }
                setExamsData(inscriptionsToShow);
            } else {
                setExamsData(exams);
            }
            setLoading(false);
        }
        getExamsCollection();
    }, [userExams]);

    return {examsData, loading}
}