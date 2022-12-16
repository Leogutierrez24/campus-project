import { React } from "react";
import { ContentContainer, ContentTitle } from "../contentContainer/ContentContainer";
import GradesTable from "../gradesTable/GradesTable";
import Loader from "../loader/Loader";
import { useGetGrades } from "../hooks/useGetGrades";

const UserGradesContainer = () => {
    const { gradesList, loading } = useGetGrades();
    return(
        <ContentContainer>
            <ContentTitle titleText={"Mis calificaciones"} />
            {
                (loading) 
                    ? <Loader /> 
                    : (gradesList.length !== 0) ? <GradesTable props={gradesList}/> : <p>No hay información aun.</p>
            }
        </ContentContainer>
    );
}

export default UserGradesContainer;