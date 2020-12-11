import React from 'react';
import './About.css';

const About = () => (
    <div id="aboutSection">
        <div className="row aboutRow">
            <div id="AboutSectionBox" className="col-lg-3 col-md-3 col-sm-10 offset-lg-1 offset-md-1 offset-sm-1">
                <div id="aboutSectionDescription">
                    <h2>About the tool</h2>
                    <p>A new tool to help match cities and technology service providers with standards. Creating a more discoverable, open and collaborative standards marketplace.</p>
                </div>
                <img id="DescriptionBottomBox" src={require('../../images/Description_Box_Bottom.svg')} />
            </div>
            <div id="AboutTopBoxContainer" className="col-lg-7 col-md-7 col-sm-10 offset-lg-0 offset-md-0 offset-sm-0">
                <img id="AboutTopBox" src={require('../../images/Top_Box_About.png')} />
                <div id="aboutContent">
                    <h4 id="initialHeader">The Synchronicity standards catalogue is a prototype tool which aims to help match cities and technology service providers with standards.</h4>
                    <p>It does this by bringing together standards for Smart Cities from many organisations into one place to make it easier to identify what standards to use, to create a more discoverable, open and collaborative standards marketplace.</p>
                    <br />
                    <p>For Synchronicity, this helps you discover the standards that enable minimum interoperability (Minimum Interoperability Mechanisms), but also helps discover other standards that help with you with your journey ultimately enabling smart, sustainable cities and communities.  This includes for example:</p>
                    <br />
                    <ul>
                        <li>Guidance on what it means to be a smart city (see Smart City Governance > Guidance)</li>
                        <li>Knowing which standards can help you best think about managing data or how to use AI (see Data Management & AI category)</li>
                        <li>What standards might help you when designing and procuring new street lighting within a public realm project (see Public Realm > Street Lighting) or ICT systems and applications (see Smart City ICT)</li>
                    </ul>
                    <br />
                    <p>The tool allows you to choose from a set of 12 core topics, from standards that help city governance, data management and citizen service design through to standards that help with smart mobility, utilities and health. For example within the data governance and AI category, you can focus in on standards relating to data privacy. You will then be presented with key information about the standards that can help including an abstract and a link to where the standard can be obtained.</p>
                    <p>In the future, we would also like to evolve the tool to provide further functionality. Such as allowing cities to see use cases, to learn from others that have used the standard and data on how popular the standard is.  For standards bodies, we would like this to be a tool to help see where there are clashes between standard or gaps that exist, to help coordination and development.</p>
                    <p>Work (bringing the standards catalogue to life) by CPC, operated by OASC</p>
                    <h4 className="aboutHeader">Vision:</h4>
                    <p>Standards are the building blocks of the digital single marketplace.</p>
                    <ul>
                        <li>For the supply-side, they enable reusability, replicability and scalability.</li>
                        <li>For the demand side, they enable replaceability, portability and comparability.</li>
                    </ul>
                    <p>For all parties, they enable interoperability, reducing risk, increasing investment and ultimately driving innovation.</p>
                    <p>Yet with thousands of standards for smart cities, how does a city or technology service provide decide which standards to use?  And for standards bodies, how do they coordinate their work to ensure they are not repeating work, further contributing to a fragmented standards marketplace.</p>
                    <p>Imagine if you could discover all global smart city standards in one single, user friendly platform, compare them, see who is using them and learn from other peoples experiences.  The vision for the standards library is to help create a more open, user friendly, interoperable standards marketplace, by providing a platform for standards organisations to collaborate and for cities and technology services providers to easily discover, decide upon and share what standards they are using.</p>
                    <h4 className="aboutHeader">Why?</h4>
                    <p>User research conducted by Connected Places Catapult and OASC identified that cities have a challenge with navigating the complex standards landscape, with 47% of cities surveyed not knowing what standards to use.  Standards Development Organisations also have a challenge in coordinating work, often developing conflicting standards e.g. there are multiple IoT reference architectures.  This challenge has led to the development of a new <strong>joint task force between ITU, ISO and IEC</strong>, the three main international standards bodies in order to better coordinate standards.</p>
                    <p>The vision for the  online standards navigation tool is to help bring together the multiple standards available for smart cities and present this in an easy to navigate way for cities and technology service providers, so they can find what standards are relevant to what they are working on and see who else is using them, to help decide which standards to use.  For standards bodies, the vision is that this is a tool to enable collaboration by better coordination of standards development, helping to see where there are gaps as well as a tool to help the uptake of standards.</p>
                    <br />
                    <div className="logoContainer">
                        <img className="aboutLogos" src={require('../../images/Logo_CPC.png')} />
                        <img className="aboutLogos" src={require('../../images/Logo_OASC.png')} />
                        <a href="https://synchronicity-iot.eu">
                            <img className="aboutLogos" src={require('../../images/Logo_synchronicity.svg')} />
                        </a>
                        <img className="aboutLogos" src={require('../../images/Logo_H2020.svg')} />
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default About