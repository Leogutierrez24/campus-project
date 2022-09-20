import { React } from "react";
import { useOpenMenu } from "./hooks/useOpenMenu";
import UserPanel from "../userPanel/UserPanel";
import menuIcon from "../assets/icons/list.svg";
import SideBar from "../sideBar/SideBar";
import "./accountTopbar.scss";

const AccountTopbar = () => {
    const { openMenu, handleCloseMenu, handleOpenMenu } = useOpenMenu();
    return(
        <header className="top-bar">
            <div className="top-bar__leftSide">
                <button className="topbar-menu-btn" onClick={handleOpenMenu}>
                    <img className="topbar-menu-btn__img" src={menuIcon} alt="menu icon" />
                </button>
                <div className="campus-logo">
                    <p>LOGO</p>
                </div>
            </div>
            <UserPanel />
            {
                openMenu && <SideBar props={handleCloseMenu} />
            }
        </header>
    );
}

export default AccountTopbar;