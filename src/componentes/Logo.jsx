import React from "react";
import logo from '../imagenes/freecodecamp-logo.png';
import '../styles/Logo.css';

function Container() {
    return (
        <div className="freecodecamp-logo-contenedor">
            <Logo logo={logo} />
        </div>
    )
}

function Logo({logo}) {
    return (
        <img
        src={logo}
        className="freecodecamp-logo"
        alt='logo de freecodecamp'
        />
    )
}

export default Container;