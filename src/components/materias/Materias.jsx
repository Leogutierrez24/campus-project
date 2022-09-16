import { React, useState, useEffect } from "react";
import { getDocs, collection, where, query } from "firebase/firestore";
import db from "../firebase/firebaseConfig";
import Materia from "../materia/Materia";
import Loader from "../loader/Loader";
import { ContextUser } from "../context/UserContext";
import "./materias.scss";

const Materias = () => {
    const [loading, setLoading] = useState(false);
    const [subjects, setSubjects] = useState();
    const { userLogged } = ContextUser();

    useEffect(() => {
        setLoading(true);
        const getUserSubjects = async () => { // for some reason trying to get by one document does not work
            const q = query(collection(db, "userSubjects"), where("nFile", "==", userLogged.nFile));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((document) => {
                setLoading(false);
                setSubjects(document.data().subjects);
            });
        }
        getUserSubjects();
    }, [userLogged.nFile]);

    console.log(subjects)

    return(
        <div className="subjects-container">
            <h3 className="subjects-title">Mis asignaturas</h3>
            <div className="user-subjects">
                {
                    (loading) ? <Loader /> : <Materia asignaturas={subjects} />
                }
            </div>
       </div>
    );
}

export default Materias;