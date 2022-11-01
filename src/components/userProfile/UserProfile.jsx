import { React, useState } from "react";
import UserInformation from "../userInformation/UserInformation";
import UserInformationForm from "../userInfomationForm/UserInformationForm";

const UserProfile = () => {
    const [infoForm, setInfoForm] = useState(false);
    
    const handleInfoForm = (value) => {
        setInfoForm(value);
    }
    
    return(
        <>
        {
            (infoForm) ? <UserInformationForm handleInfoForm={handleInfoForm}/> : <UserInformation handleInfoForm={handleInfoForm}/>
        }
        </>
    );
}

export default UserProfile;