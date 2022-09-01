import React from "react";
import AccountTopbar from "../accountTopBar/AccountTopbar";
import SideBar from "../sideBar/SideBar";
import "./account.scss";

const Account = () => {
    return(
        <div className="account">
            <AccountTopbar />
            <SideBar />
        </div>
    );
};

export default Account;