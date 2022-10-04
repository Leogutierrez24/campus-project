import { React } from "react";
import logo from "../assets/images/logo_3.jpg";
import "./campusLogo.scss";

const CampusLogo = () => {
    return(
        <div className="campus-logo">
            <img src={logo} alt="logo de fmed" className="campus-logo__img"/>
        </div>
    );
}

export default CampusLogo;