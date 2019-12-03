import React, { useState, useEffect } from 'react';
import SynchronicityLogo from '../../components/Synchronicity/SynchronicityLogo'
import './Landing.css';

const Landing = () => {
    return (
        <section id="section1">
            <div className="row landingLogoRow">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <SynchronicityLogo />
                </div>
            </div>

            <div className="row subtitleRow">
                <div className="col-lg-6 col-md-8 col-sm-10 offset-lg-3 offset-md-2 offset-sm-1">
                <p id="subtitle" href="#section2" onClick={() => { }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            
            </div>

            
            {/* <button className="button btn btn-success"><p>Get Started</p></button>
      <button className="button btn btn-success"><p>Learn More</p></button> */}
        </section>
    )
}

export default Landing