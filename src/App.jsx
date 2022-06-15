/** @format */

import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Upload from './components/pages/Upload';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/upload' element={<Upload />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
