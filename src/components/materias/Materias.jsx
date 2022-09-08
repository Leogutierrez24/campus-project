import { React, useState, useEffect } from "react";
import Materia from "../materia/Materia";
import Loader from "../loader/Loader";
import materias from "../data/materias";
import "./materias.scss";

const Materias = () => {
    const [loading, setLoading] = useState(false);
    const [subjects, setSubjects] = useState();

    useEffect(() => {
        const chargeSubjects = new Promise((resolve, reject) => {
            if(materias !== undefined){
                resolve(materias);
            } else {
                reject("No se encontraron materias");
            }
        });
        chargeSubjects.then((data) => {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setSubjects(data);
            }, 2000);
        })
    }, []);

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