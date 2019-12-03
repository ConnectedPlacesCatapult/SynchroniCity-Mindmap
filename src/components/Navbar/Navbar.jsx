import React from 'react';
import SynchronicityLogo from '../Synchronicity/SynchronicityLogo';
import CTA from '../CTA/CTA';
import './Navbar.css';

const Navbar = () => {
    return(
        <div id="navbar" className="navbar">
            <SynchronicityLogo />
            <CTA />
        </div>
    )
}

export default Navbar;