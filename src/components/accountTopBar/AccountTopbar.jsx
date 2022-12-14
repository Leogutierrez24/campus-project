import { React } from "react";
import { useOpenMenu } from "../hooks/useOpenMenu";
import UserPanelContainer from "../userPanelContainer/UserPanelContainer";
import menuIcon from "../assets/icons/list.svg";
import SideBar from "../sideBar/SideBar";
import CampusLogo  from "../campusLogo/CampusLogo";
import "./accountTopbar.scss";
import { useCheckWindowSize } from "../hooks/useCheckWindowSize";

const AccountTopbar = () => {
    const { openMenu, handleCloseMenu, handleOpenMenu } = useOpenMenu();
    const { windowSize } = useCheckWindowSize();
    return(
        <header className="top-bar">
            <div className="top-bar__leftSide">
                {
                    (windowSize.innerWidth <= 1024)
                        ?   
                        <button className="topbar-menu-btn" onClick={handleOpenMenu}>
                            <img className="topbar-menu-btn__img" src={menuIcon} alt="menu icon" />
                        </button> 
                        : null
                }
                <CampusLogo />
            </div>
            <UserPanelContainer />
            {
                (windowSize.innerWidth <= 1024 && openMenu === true) ? <SideBar props={handleCloseMenu} /> : null
            }
        </header>
    );
}

export default AccountTopbar;