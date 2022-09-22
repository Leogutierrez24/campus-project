import { React } from "react";
import { ContextUser } from "../context/UserContext";
import Panel from "../Panel/Panel";

const UserPanelContainer = () => {
    const { logoutUser, userState, userLogged } = ContextUser();   
    return(
        <>
            <Panel {...{logoutUser, userState, userLogged}}/>
        </>
    );
}

export default UserPanelContainer;