import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Landing from './pages/Landing/Landing';
import Topics from './pages/Topics/Topics';
import { apiCall } from './api/spreadsheet';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  useEffect(() => {
    apiCall();
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
