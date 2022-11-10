import React, {useEffect, useState} from "react";
import { ContextUser } from "../context/UserContext";
import db from "../firebase/firebaseConfig";
import {collection, getDocs} from "firebase/firestore";
import Loader from "../loader/Loader";
import SubjectListContainer from "../subjectListContainer/SubjectListContainer";

const SubjectInscriptionList = () => {
    const [subjectItem, setSubjectItems] = useState();
    const [loading, setLoading] = useState(false);
    const { userLogged } = ContextUser();

    useEffect(() => {
        const getSubjects = async () => {
            let subjects = [];
            const querySnapshot = await getDocs(collection(db, "subjectsInscriptions"));
            querySnapshot.forEach((item) => {
                subjects.push({...item.data()});
            });
            setSubjectItems(subjects);
        }
        getSubjects();
    }, []);
    
    return(
        <>
        {
            subjectItem?.map((subject) => {
                return(
                    <SubjectListContainer key={subject.code} {...subject} />
                )
            })
        }
        </>
    );
}

export default SubjectInscriptionList;