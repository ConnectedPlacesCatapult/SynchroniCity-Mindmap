import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Topics from './pages/Topics/Topics';
import Standards from './pages/Standards/Standards';
import generateContent, { value, getId, standard, subtopic } from './functions/generateContent';
import aesthetics from './functions/aesthetics';
import { importSheet, getTag0, getTags, rows, tag0Unique, tagAllUnique, filteredStandards, filteredSubStandards, getFilteredSubStandards } from './api/spreadsheet';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import './App.css';

function App() {
  useEffect(() => {
    // tag0 = click button
    var tag0 = 'MIMs';
    getTag0().then(() => { getTags(rows, subtopic) })
      .then(() => { generateContent.tag0(); })
      .then(() => { generateContent.assignTopicId(); })
      .then(() => { console.log(tagAllUnique); });

  });
  // tag0 = click button topic
  var tag0Select = 'MIMs'
  // subtag = click button subtopic
  var subTagSelect = 'API'
  // getTag0().then(() => {getTags(rows, subtopic)}).then(() => {getFilteredSubStandards(filteredStandards, subTagSelect)}).then(() => console.log(filteredSubStandards));
  // tag0Unique stores all topics
  // tagAllUnique stores all subtopics based on a topic
  // filteredStandards stores all standards based on a topic
  // filteredSubStandard stores all standards based on a subtopic and topic

  return (
    <div className="App">
      <Header />
      <Navbar />
      <Topics />
      <Standards />
    </div>
  );
}

export default App;
