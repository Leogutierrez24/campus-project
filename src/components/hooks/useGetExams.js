import {useState, useEffect} from "react";
import db from "../firebase/firebaseConfig";
import {collection, getDocs} from "firebase/firestore";
import { useGetGrades } from "./useGetGrades";
import { useGetInscription } from "./useGetInscription";

export const useGetExams = () => {
    const [examsData, setExamsData] = useState([]);
    const [loading, setLoading] = useState(false);
    const { document: userExams } = useGetInscription("usersExamsInscriptions");
    const { gradesList } = useGetGrades();

    useEffect(() => {
        setLoading(true);

        const getExamsCollection = async () => {
            let exams = [];
            const querySnapshot = await getDocs(collection(db, "examsInscriptions"));
            querySnapshot.forEach((doc) => {
                exams.push({...doc.data()});
            });

            let inscriptionsToShow = [...exams];

            if(gradesList?.length > 0){
                let pendingSubjects = gradesList.filter(subject => subject.status !== true);

                for(let i = 0; i < exams.length; i++){
                    let elementResult = pendingSubjects.find(e => e.code === exams[i].code);
                    if(elementResult === undefined) inscriptionsToShow = inscriptionsToShow.filter(e => e.code !== exams[i].code);
                }

                if(userExams?.length > 0){
                    for(let i = 0; i < userExams.length; i++){
                        let elementResult = inscriptionsToShow.find(e => e.name === userExams[i].name);
                        if(elementResult !== undefined) inscriptionsToShow = inscriptionsToShow.filter(e => e.name !== elementResult.name);
                    }
                }
            }

            setExamsData(inscriptionsToShow);

            setLoading(false);
        }
        getExamsCollection();
    }, [userExams, gradesList]);

    return {examsData, loading}
}