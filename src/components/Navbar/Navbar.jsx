import React, { useState, useEffect } from 'react';
import { navigate } from './Navbar';
import './Navbar.css';

const Navbar = () => {
    useEffect(() => {
        setTimeout(() => {
            document.getElementById('navTopic').classList.add('active');
        }, 1000);
    });

    return (
        <div id="navbar" className="navbar">
            <img className="navbarLogo" src={require("../../images/synchronicity_logo_black.svg")} alt="Synchronicity Logo" onClick={() => { navigate.topic(); }} />
            <ul>
                <li id="navAbout" onClick={() => { navigate.about(); }}>About</li>
                <li id="navGI" onClick={() => { navigate.gi(); }}>Get Involved</li>
                <li id="navTopic" onClick={() => { navigate.topic(); }}>Topic </li>
                <li id="seperator">|</li>
                <li id="navSubtopic" onClick={() => { navigate.subtopic(); }}>Subtopic</li>
            </ul>
        </div>
    )
}

export default Navbar;