import React from 'react';
import './Topics.css';
import generateContent from '../../functions/generateContent';
import generate from '@babel/generator';

const Topics = () => {
    return (
        <section id="section2">

            { /* ========== START OF TOPICS SECTION ========== */}

            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-10 offset-lg-1 offset-md-1 offset-sm-1">
                    <h2 id="topicsHeader" className="topicsHeader">Select topic</h2>
                    <p id="topicsText">All standards are categorised into these topics. Please select one to continue</p>
                </div>

                <div id="tag0Container" className="col-lg-7 col-md-6 col-sm-10">
                </div>
            </div>


            { /* ========== START OF SUBTOPICS SECTION ========== */}

            <div className="subtopicsRow row">
                <div className="col-lg-3 col-md-4 col-sm-10 offset-lg-1 offset-md-1 offset-sm-1">
                    <h2 id="topicsHeader" className="topicdHeader">Select subtopic</h2>
                </div>

                {/* This is where all top level topics will be rendered */}
                <div id="subtopicsContainer" className="col-lg-7 col-md-6 col-sm-10">
                    <button id="thisid" value="thisvalue">button </button>
                </div>
            </div>

        </section>
    )
}

export default Topics;