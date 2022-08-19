import React from "react";
import Navbar from "../navbar/Navbar";

const NavbarContainer = () => {
    let userLoged = false;
    return(
        <Navbar props={userLoged}/>
    );
}

export default NavbarContainer;