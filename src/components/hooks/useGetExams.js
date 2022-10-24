import {useState, useEffect} from "react";
import db from "../firebase/firebaseConfig";
import {collection, getDocs} from "firebase/firestore";

export const useGetExams = () => {
    const [examsData, setExamsData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const getExamsCollection = async () => {
            let exams = [];
            const querySnapshot = await getDocs(collection(db, "examsInscriptions"));
            querySnapshot.forEach((doc) => {
                exams.push({...doc.data()});
            });
            setExamsData(exams);
            setLoading(false);
        }
        getExamsCollection();
    }, []);

    return {examsData, loading}
}