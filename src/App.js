import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Landing from './pages/Landing/Landing';
import Topics from './pages/Topics/Topics';
import { importSheet, getTag0, getTags, rows } from './api/spreadsheet';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  useEffect(() => {
    var tag0Array = [];
    // var allTagsArray = [];
    // var tag0 = 'MIMs'
    tag0Array = getTag0();
    // allTagsArray = getTag0().then(() => {getTags(rows, tag0)});
    console.log(tag0Array);
    // console.log(allTagsArray);
  });

  return (
    <div className="App">
      {/* <Navbar /> */}
      <Landing />
      <Topics />
    </div>
  );
}

export default App;
