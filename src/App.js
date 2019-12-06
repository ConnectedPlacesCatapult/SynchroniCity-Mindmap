import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Landing from './pages/Landing/Landing';
import Topics from './pages/Topics/Topics';
import Folder from './components/Folder/Folder';
import SynchronicityLogo from './components/Synchronicity/SynchronicityLogo';
// import { importSheet, getTag0, getTags, rows, tag0Unique, tagAllUnique, filteredStandards, filteredSubStandards, getFilteredSubStandards } from './api/spreadsheet';
import {
  getTag0,
  getTags,
  rows,
  tag0Unique,
  tagAllUnique
} from './api/spreadsheet';
import generateContent from './functions/generateContent.jsx';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const folderRed = require('./images/folder_red.png')

function App() {
  useEffect(() => {
    // tag0 = click button
    var tag0 = 'MIMs';
    getTag0().then(() => { getTags(rows, tag0) })
      .then(() => { generateContent.tag0(); })
      .then(() => {
        for (let i = 1; i <= tag0Unique.length; i++) {
          document.querySelector('.topicDiv:nth-child(' + i + ')').innerHTML = <Folder /> + document.querySelector('.topicDiv:nth-child(' + i + ')').innerHTML
          let test = document.querySelector('.topicDiv:nth-child(12)');
          console.log(test)
        }
      });

    console.log(rows);

  }); 


      // // tag0 = click button topic
    // var tag0 = 'MIMs'
    // // subtag = click button subtopic
    // var subtag = 'API'
    // getTag0().then(() => {getTags(rows, tag0)}).then(() => {getFilteredSubStandards(filteredStandards, subtag)}).then(() => console.log(filteredSubStandards));
    // // tag0Unique stores all topics
    // // tagAllUnique stores all subtopics based on a topic
    // // filteredStandards stores all standards based on a topic
    // // filteredSubStandard stores all standards based on a subtopic and topic

    
  return (
    <div className="App">
      <Navbar />
      {/* <Landing /> */}
      <Topics />
      <Folder />
    </div>
  );
}

export default App;
