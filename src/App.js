import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Landing from './pages/Landing/Landing';
import Topics from './pages/Topics/Topics';
import { importSheet, getTag0, getTags, rows, tag0Unique, tagAllUnique, filteredStandards, filteredSubStandards, getFilteredSubStandards } from './api/spreadsheet';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  useEffect(() => {
    // tag0 = click button topic
    var tag0 = 'MIMs'
    // subtag = click button subtopic
    var subtag = 'API'
    getTag0().then(() => {getTags(rows, tag0)}).then(() => {getFilteredSubStandards(filteredStandards, subtag)}).then(() => console.log(filteredSubStandards));
    // tag0Unique stores all topics
    // tagAllUnique stores all subtopics based on a topic
    // filteredStandards stores all standards based on a topic
    // filteredSubStandard stores all standards based on a subtopic and topic
  });

  return (
    <div className="App">
      <Navbar />
      {/* <Landing /> */}
      <Topics />
    </div>
  );
}

export default App;
