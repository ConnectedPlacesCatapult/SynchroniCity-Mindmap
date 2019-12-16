import React from 'react';
import './Footer.css';

const Footer = () => (
    <div id="footer" className="row">
        <div className="col-lg-4 col-md-4 col-sm-4 center">
            <img id="footerLogo" src={require('../../images/placeholder_header_logo.png')} alt="Placeholder Logo" />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 footerMiddleCol">
            <h3>newsletter</h3>
            <p>Subscribe to our mailing list</p>
            <input type="text" />
            <button id="footerButton">subscribe</button>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 center">
            <div id="contain">
                <img className="footerPlaceholderImage" src={require('../../images/placeholder_image_footer.png')} />
                <img className="footerPlaceholderImage" src={require('../../images/placeholder_image_footer.png')} />
                <img className="footerPlaceholderImage" src={require('../../images/placeholder_image_footer.png')} />
                <img className="footerPlaceholderImage" src={require('../../images/placeholder_image_footer.png')} />
                <img className="footerPlaceholderImage" src={require('../../images/placeholder_image_footer.png')} />
                <img className="footerPlaceholderImage" src={require('../../images/placeholder_image_footer.png')} />
            </div>
        </div>

    </div>
)

export default Footer;