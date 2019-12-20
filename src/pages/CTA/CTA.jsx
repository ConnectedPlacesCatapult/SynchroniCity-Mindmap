import React from 'react';
import './CTA.css';

const CTA = () => (
    <div id="CTASection">
        <div className="row CTARow">
            <div className="col-lg-3 col-md-3 col-sm-10 offset-lg-1 offset-md-1 offset-sm-1">
                <div id="CTASectionDescription">
                    <h2>Get involved</h2>
                    <p>Work with us to help the adoption of standards for smart and sustainable cities and communities.</p>
                </div>
                <img id="DescriptionBottomBox" src={require('../../images/Description_Box_Bottom.svg')}/> 
            </div>
            <div id="GetInvolvedTopBoxContainer" className="col-lg-7 col-md-7 col-sm-10 offset-lg-0 offset-md-0 offset-sm-1">
                <img id="GetInvolvedTopBox" src={require('../../images/Top_Box_GetInvolved.png')}/>
                <div id="CTAContent">
                    <h4 id="initialCTAHeader">The tool aims to help match cities and technology service providers with standards.</h4>
                    <p>Creating a more discoverable, open and collaborative standards marketplace.  Ultimately it aims to help adoption of standards by making it easier to find standards for smart cities.  It also aims to help standards bodies by making their content more accessible and helping coordinate standards development work.  You can get involved in the following ways:</p>
                    <br />
                    <p><strong>Cities and communities:</strong> We want cities and communities to get involved by using the tool and getting in touch to share your feedback plus any stories of how you have used standards yourselves.  You can also get in touch with any questions you might have.</p>
                    <br />
                    <p><strong>Standards bodies:</strong> We are looking to work with standards bodies who would like to further promote their standards for cities through this platform by helping work with us on how we develop this further and by contributing your content.</p>
                    <br />
                    <p>If you want to get involved, contact us at info@oascities.org.</p>
                </div>
            </div>
        </div>
    </div>
)

export default CTA