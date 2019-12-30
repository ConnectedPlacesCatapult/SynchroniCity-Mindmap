import React, { useState, useEffect } from 'react';
import Spinner from './components/Spinner/spinner';
import Navbar from './components/Navbar/Navbar.jsx';
import Header from './components/Header/Header';
import Topics from './pages/Topics/Topics';
import Standards from './pages/Standards/Standards';
import About from './pages/About/About';
import CTA from './pages/CTA/CTA';
import Footer from './components/Footer/Footer';
import generateContent, { value, getId, standard, subtopic } from './functions/generateContent';
import aesthetics from './functions/aesthetics';
import { importSheet, getTag0, getTags, rows, tag0Unique, tagAllUnique, filteredStandards, filteredSubStandards, getFilteredSubStandards } from './api/spreadsheet';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import './App.css';

function App() {
  useEffect(() => {

    getTag0().then(() => { getTags(rows, subtopic) })
      .then(() => { generateContent.tag0(); })
      .then(() => { generateContent.assignTopicId(); })
      .then(() => { console.log(tag0Unique); });
  });
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
      <CTA />
      <About />
      <Footer />
    </div>
  );
}

export default App;
