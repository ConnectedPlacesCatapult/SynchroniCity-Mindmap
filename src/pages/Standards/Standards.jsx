import React from 'react';
import generateContent from '../../functions/generateContent';
import './Standards.css';
import generate from '@babel/generator';

const Standards = () => {
    return (
        <div id="resultWrapper">
            <div id="standardsResult" className="standardsResult row">
                <div id="backdrop" onClick={() => { generateContent.closeModal(); }}></div>
                <div className="standardsContentContainer col-lg-6 col-md-6 col-sm-10 offset-lg-3 offset-md-3 offset-sm-1">
                    <img id="resultTop" src={require('../../images/Close_Container.svg')} />
                    <div id="closeStandard" onClick={() => { generateContent.closeModal(); }}></div>
                    <div id="titleAndSubtitle">
                        <h3 id="standardName"> Standard</h3>
                        <h3 id="subTitle"> Subtitle</h3>
                    </div>
                    <p id="description"> Description</p>
                    <div id="URLDiv">
                        <a id="URL" href="#" target="_blank"> link to standard</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Standards;
