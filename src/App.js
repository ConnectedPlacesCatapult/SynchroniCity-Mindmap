import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Landing from './pages/Landing/Landing';
import Topics from './pages/Topics/Topics';
import {
  getTag0, 
  getTags, 
  rows, 
  tag0Unique, 
  tagAllUnique } from './api/spreadsheet';
  import generateContent from './functions/generateContent.jsx';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  useEffect(() => {
    // tag0 = click button
    var tag0 = 'MIMs';
    getTag0().then(() => {getTags(rows, tag0)}).then(() => {generateContent.tag0();}).then(() => {console.log(rows);})
    console.log(rows);
    
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
