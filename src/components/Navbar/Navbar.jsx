import React from 'react';
import SynchronicityLogo from '../Synchronicity/SynchronicityLogo';
import CTA from '../CTA/CTA';
import './Navbar.css';

const Navbar = () => {
    return(
        <div id="navbar" className="navbar">
            <img className="navbarLogo" src={require("../../images/synchronicity_logo_white.png")} alt="Synchronicity Logo" />
            <CTA />
        </div>
    )
}

export default Navbar;