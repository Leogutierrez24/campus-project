import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo_3.jpg";
import "./navBar.scss";

const Navbar = () => {
    return(
        <header className="navbar-container">
            <div className="navbar-menu">
                <div className="campus-logo">
                    <img src={logo} alt="logo" className="logo-img"/>
                </div>
                <nav className="nav-content">
                    <ul className="nav-links">
                        <li className="nav-link"><a href="#news">Noticias</a></li>
                        <li className="nav-link"><a href="#contact">Contactos</a></li>
                        <li className="nav-link"><Link to="/login">Ingresar</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;