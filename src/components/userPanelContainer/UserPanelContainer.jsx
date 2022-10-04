import { React } from "react";
import { ContextUser } from "../context/UserContext";
import { useGetUserData } from "../hooks/useGetUserData";
import Panel from "../Panel/Panel";

const UserPanelContainer = () => {
    const { logoutUser, userState } = ContextUser();
    const { userInfo, loading } = useGetUserData();
    return(
        <>
            <Panel {...{logoutUser, userState, userInfo, loading}}/>
        </>
    );
}

export default UserPanelContainer;