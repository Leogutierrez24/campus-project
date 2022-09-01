import { React } from "react";
import userIcon from "../assets/icons/person-circle.svg";
import "./userPanel.scss";

const UserPanel = () => {
    return(
        <div className="user-panel">
            <div className="user-avatar">
                <img src={userIcon} className="user-icon" alt="avatar de usuario" />
            </div>
            <div className="username">
                <p>Nombre del usuario</p>
            </div>
        </div>
    );
}

export default UserPanel;