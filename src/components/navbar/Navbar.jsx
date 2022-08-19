import React from "react";
import "./navBar.scss";

const Navbar = ({props}) => {
    console.log(props)
    return(
        <header className="navbar-container">
            <div className="navbar-menu">
                <div className="campus-logo">
                    <p>LOGO DEL SITIO</p>
                </div>
                <nav>
                    <ul className="nav-links">
                        <li className="nav-link"><a href="/#">Noticias</a></li>
                        <li className="nav-link"><a href="/#">Contactos</a></li>
                        <li className="nav-link">
                        {
                            props ? <a href="/#">Mi Cuenta</a> : <a href="/#">Ingresar</a>
                        }
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;