import { React } from "react";

const Materia = ({asignaturas}) => {

    return(
        <>
            {
                asignaturas?.map((item) => {
                    return(
                        <div key={item.id}>
                            <p>{item.commision}</p>
                            <p>{item.teacher}</p>
                            <p>{item.hour}</p>
                            <p>{item.campus}</p>
                            <p>{item.classroom}</p>
                            <p>{item.modality}</p>
                        </div>
                    )
                })
            }
        </>
    );
}

export default Materia;