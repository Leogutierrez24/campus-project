import { React } from "react";
import { Outlet } from "react-router-dom";
import { useCheckWindowSize } from "../hooks/useCheckWindowSize";
import AccountTopbar from "../accountTopBar/AccountTopbar";
import SideBar from "../sideBar/SideBar";
import "./account.scss";

const Account = () => {
    const { windowSize } = useCheckWindowSize();
    return(
        <div className="account">
            <AccountTopbar />
            <div className="account-content">
                {
                    (windowSize.innerWidth > 1024) ? <SideBar /> : null
                }
                <Outlet />
            </div>
        </div>
    );
};

export default Account;