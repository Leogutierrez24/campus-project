import { React } from "react";
import { useGetUserData } from "../hooks/useGetUserData";
import DataList from "../dataList/DataList";
import Loader from "../loader/Loader";
import "./userInformation.scss";

const UserInformation = ({handleInfoForm}) => {
    const { userInfo, loading } = useGetUserData();

    const handleChangeButton = () => {
        handleInfoForm(true);
    }

    return(
        <div className="userProfile-container">
            <h3 className="userProfile-title">Datos de mi cuenta</h3>
            {
                (loading)
                    ? <Loader />
                    : <>
                        <DataList props={userInfo}/>
                        <button onClick={handleChangeButton}>Modificar mis datos</button>
                    </>
            }
            
        </div>
    );   
}

export default UserInformation;