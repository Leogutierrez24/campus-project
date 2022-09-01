import { React } from "react";
import UserPanel from "../userPanel/UserPanel";
import "./accountTopbar.scss";

const AccountNabvar = () => {
    return(
        <header className="top-bar">
            <div className="campus-logo">
                <p>LOGO</p>
            </div>
            <UserPanel />
        </header>
    );
}

export default AccountNabvar;