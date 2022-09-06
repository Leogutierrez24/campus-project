import React from "react";
import { Outlet } from "react-router-dom";
import AccountTopbar from "../accountTopBar/AccountTopbar";
import SideBar from "../sideBar/SideBar";
import "./account.scss";

const Account = () => {
    return(
        <div className="account">
            <AccountTopbar />
            <div style={{display: "flex"}}>
                <SideBar />
                <Outlet />
            </div>
        </div>
    );
};

export default Account;