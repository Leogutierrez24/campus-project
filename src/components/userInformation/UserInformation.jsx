import React from "react";
import { useGetUserData } from "../hooks/useGetUserData";
import { ContentContainer, ContentTitle } from "../contentContainer/ContentContainer";
import DataList from "../dataList/DataList";
import Loader from "../loader/Loader";
import Button from "../button/Button";

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
                        <Button nameClass={"modInfo-btn backBlue large"} text={"Modificar mis datos"} action={handleChangeButton} />
                    </>
            }
        </ContentContainer>
    );   
}

export default UserInformation;