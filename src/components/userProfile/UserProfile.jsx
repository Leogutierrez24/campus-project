import { React } from "react";

import "./userProfile.scss";
import Loader from "../loader/Loader";

const UserProfile = () => {
    
    return(
        <div className="profile-container">
            <div style={{display: "flex"}}>
                <Loader />
            </div>
        </div>);
}

export default UserProfile;