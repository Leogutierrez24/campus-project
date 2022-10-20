import React, {useEffect, useState} from "react";
import SubjectExamItem from "../subjectExamItem/SubjectExamItem";
import db from "../firebase/firebaseConfig";
import {collection, getDocs} from "firebase/firestore";

const AddExamSubjects = () => {
    const [examsData, setExamsData] = useState([]);
    
    useEffect(() => {
        const getExamsCollection = async () => {
            let exams = [];
            const querySnapshot = await getDocs(collection(db, "examsInscriptions"));
            querySnapshot.forEach((doc) => {
                exams.push({...doc.data()});
            });
            setExamsData(exams);
        }

        getExamsCollection();
    }, []);

    return(
        <div>
            {
                examsData?.map((item) => {
                    return <SubjectExamItem key={item.name} props={item}/>
                })
            }
        </div>
    );
}

export default AddExamSubjects;