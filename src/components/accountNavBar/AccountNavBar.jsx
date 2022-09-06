import { React } from "react";
import { Link } from "react-router-dom";
import "./accountNavBar.scss";

const AccountNavBar = () => {
    return(
        <nav className="menu-links">
            <Link to="/account/materias" className="menu-link"><span>Materias</span></Link>
            <Link to="/account/calificaciones" className="menu-link"><span>Calificaciones</span></Link>
            <Link to="/account/perfil" className="menu-link"><span>Mis datos</span></Link>
            <Link to="#" className="menu-link"><span>Pagos</span></Link>
            <Link to="/account/inscrip-examenes" className="menu-link"><span>Inscripcion a examenes</span></Link>
            <Link to="/account/inscrip-materias" className="menu-link"><span>Inscripcion a materias</span></Link>
        </nav>
    );
}

export default AccountNavBar;