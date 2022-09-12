import { React, useRef, useState } from "react";
import { Link } from "react-router-dom";
import userIcon from "../assets/icons/person-circle.svg";
import arrowIcon from "../assets/icons/caret-down-fill.svg";
import "./userPanel.scss";

const UserPanel = () => {
    const toggableDiv = useRef(null);
    const daArrow = useRef(null);
    const [divOpen, setDivOpen] = useState(false);
    const handleOpenDiv = (e) => {
        if(divOpen){
            toggableDiv.current.classList.remove("itsOpen");
            daArrow.current.classList.remove("itsRotate");
            setDivOpen(false);
        } else {
            toggableDiv.current.classList.add("itsOpen");
            daArrow.current.classList.add("itsRotate");
            setDivOpen(true);
        }
    }
    return(
        <div className="user-panel">
            <button className="user-panel__btn" onClick={handleOpenDiv}>
                <div className="user-avatar">
                    <img src={userIcon} className="user-icon" alt="avatar de usuario" />
                </div>
                <div className="username">
                    <p>Nombre del usuario</p>
                </div>
                <img src={arrowIcon} alt="icono desplegar" ref={daArrow} />
            </button>
            <div className="toggle-menu" ref={toggableDiv}>
                <Link to="/account/perfil" className="toggle-menu__link" onClick={handleOpenDiv}>Modificar mis datos</Link>
                <button className="toggle-menu__btn">Cerrar sesión</button>
            </div>
        </div>
    );
}

export default UserPanel;