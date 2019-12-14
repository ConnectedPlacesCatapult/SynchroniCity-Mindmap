import React from 'react';
import generateContent from '../../functions/generateContent';
import './Standards.css';
import generate from '@babel/generator';

const Standards = () => {
    return (
        <div id="resultWrapper">
            <div id="standardsResult" className="standardsResult row">
                <div id="backdrop" onClick={() => { generateContent.closeModal(); }}></div>
                <div className="standardsContentContainer col-lg=6 col-md-6 col-sm-10 offset-lg-3 offset-md-3 offset-sm-1">
                    <div id="closeStandard" onClick={() => { generateContent.closeModal(); }}></div>
                    <h3 id="standardName"> Standard</h3>
                    <h4 id="subTitle"> Subtitle</h4>
                    <p id="description"> Description</p>
                    <div id="URLDiv">
                        <a id="URL" href="#" target="_blank"> Link to Standard</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Standards;
