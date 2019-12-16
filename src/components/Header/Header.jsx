import React from 'react';
import './Header.css';

const Header = () => (
    <div id="header">
        <img id="headerLogo" src={require('../../images/placeholder_header_logo.png')} alt="Placeholder Logo" />
        <ul>
            <li className="headerLink">home</li>
            <li className="headerLink">cities</li>
            <li className="headerLink">about</li>
            <li className="headerLink">eews</li>
            <li className="headerLink">events</li>
            <li className="headerLink">contact</li>
            <li className="headerLink">become a member</li>
            <div id="headerIcons">
                <img id="search" src={require('../../images/search.png')} alt="search" />
                <img id="hamburger" src={require('../../images/hamburger.png')} alt="hamburger" />
            </div>
        </ul>

    </div>
)

export default Header;