import React from 'react';
import './About.css';

const About = () => (
    <div id="aboutSection">
        <div className="row aboutRow">
            <div className="col-lg-3 col-md-3 col-sm-10 offset-lg-1 offset-md-1 offset-sm-1">
                <h2>About the tool</h2>
                <p>A new tool to help match cities and technology service providers with standards. Creating a more discoverable, open and collaborative standards marketplace.</p>
            </div>
            <div id="aboutContent" className="col-lg-6 col-md-6 col-sm-10 offset-lg-1 offset-md-1 offset-sm-1">
                <h4 id="initialHeader">The Synchronicity standards catalogue is a prototype tool which aims to help match cities and technology service providers with standards.</h4>
                <p>It does this by bringing together standards for Smart Cities from many organisations into one place to make it easier to identify what standards to use, to create a more discoverable, open and collaborative standards marketplace.
                For Synchronicity, this helps you discover the standards that enable minimum interoperability (Minimum Interoperability Mechanisms), but also helps discover other standards that help with you with your journey ultimately enabling smart, sustainable cities and communities.  This includes for example:
                </p>
            </div>
        </div>
    </div>
)

export default About