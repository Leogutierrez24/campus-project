import React from "react";
import { ContentContainer, ContentTitle } from "../contentContainer/ContentContainer";
import DataList from "../dataList/DataList";
import Loader from "../loader/Loader";
import { useGetUserData } from "../hooks/useGetUserData";
import "./userInformation.scss";

const UserInformation = ({handleInfoForm}) => {
    const { userInfo, loading } = useGetUserData();

    const handleChangeButton = () => {
        handleInfoForm(true);
    }

    return(
        <ContentContainer>
            <ContentTitle titleText={"Datos de mi cuenta"} />
            {
                (loading)
                    ? <Loader />
                    : <>
                        <DataList props={userInfo}/>
                        <button onClick={handleChangeButton}>Modificar mis datos</button>
                    </>
            }
            
        </ContentContainer>
    );   
}

export default UserInformation;