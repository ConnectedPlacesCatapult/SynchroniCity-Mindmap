import React from 'react';
import './Topics.css';

const Topics = () => {
    return (
        <section id="section2">
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-10 offset-lg-1 offset-md-1 offset-sm-1">
                        <h2 id="topicsHeader" className="header">Select topic</h2>
                        <p id="topicsText">All standards are categorised into these topics. Please select one to continue</p>
                </div>

                {/* This is where all top level topics will be rendered */}
                <div id="tag0Container" className="tag0Container col-lg-7 col-md-6 col-sm-10">
                </div>
            </div>

        </section>
    )
}

export default Topics;