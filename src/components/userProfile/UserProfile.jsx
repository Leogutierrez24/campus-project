import { React } from "react";
import UserInformation from "../userInformation/UserInformation";
import UserInformationForm from "../userInfomationForm/UserInformationForm";

const UserProfile = () => {
    return(
        <>
            <UserInformation />
            <UserInformationForm />
        </>
    );
}

export default UserProfile;