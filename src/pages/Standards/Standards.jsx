import React from 'react';
import './Standards.css';

const Standards = () => {
    return (
    <div id= "standardsContainer">
        <div className= "standardsTopic row">
            <div className="standardsTopicContainer col-lg=5 col-md-5 col-sm-10 offset-lg-5 offset-md-5 offset-sm-1">
                <h2 id = "topicTitle"> Topic Title</h2>
                <h4 id = "topicDescription"> Topic Description</h4>
            </div>
        </div>
        <div className = "standardsResult row">
            <div className = "standardsNavigationContainer col-lg=3 col-md-3 offset-lg-1 offset-md-1">
                <h5 id = "topicNames"> Topic Names</h5>
            </div>
            <div className = "standardsContentContainer col-lg=6 col-md-6 col-sm-10 offset-lg-1 offset-md-1 offset-sm-1">
                <h3 id = "standardName"> Standard</h3>
                <h4 id = "subTitle"> Subtitle</h4>
                <p id = "description"> Description</p>
                <a id = "URL" href="#"> Link to Standard</a>
            </div>
        </div>
    </div>
    )
}

export default Standards;
