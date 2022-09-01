import { React } from "react";
import AccountNavBar from "../accountNavBar/AccountNavBar";
import "./sideBar.scss";

const SideBar = () => {
    return(
        <div className="side-bar">
            <AccountNavBar />
        </div>
    );
}

export default SideBar;