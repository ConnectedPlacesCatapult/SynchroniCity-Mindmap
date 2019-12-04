import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Landing from './pages/Landing/Landing';
import Topics from './pages/Topics/Topics';
import { importSheet, getTag0, getTags, rows, tag0Unique, tagAllUnique } from './api/spreadsheet';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  useEffect(() => {
    var tag0Array = [];
    var allTagsArray = [];
    var tag0 = 'MIMs'
    // getTag0();
    getTag0().then(() => {getTags(rows, tag0)}).then(() => console.log(tag0Unique));
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
