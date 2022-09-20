import { React } from "react";
import { Link } from "react-router-dom";
import "./sideBar.scss";

const SideBar = ({props}) => {
    return(
        <div className="side-bar">
            <nav className="menu-links">
                <Link to="/account/materias" className="menu-link" onClick={props}><span>Materias</span></Link>
                <Link to="/account/calificaciones" className="menu-link" onClick={props}><span>Calificaciones</span></Link>
                <Link to="/account/perfil" className="menu-link" onClick={props}><span>Mis datos</span></Link>
                <Link to="#" className="menu-link" onClick={props}><span>Pagos</span></Link>
                <Link to="/account/inscrip-examenes" className="menu-link" onClick={props}><span>Inscripcion a examenes</span></Link>
                <Link to="/account/inscrip-materias" className="menu-link" onClick={props}><span>Inscripcion a materias</span></Link>
            </nav>
        </div>
    );
}

export default SideBar;