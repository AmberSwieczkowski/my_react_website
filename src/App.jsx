import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Location from './components/pages/Location';
import Pictures from './components/pages/Pictures';
import Rsvp from './components/pages/Rsvp';
import Upload from './components/pages/Upload';

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' exact element={<Home />}></Route>
      <Route path='/location' element={<Location />}></Route>
      <Route path='/pictures' element={<Pictures />}></Route>
      <Route path='/rsvp' element={<Rsvp />}></Route>
      <Route path='/upload' element={<Upload />}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
