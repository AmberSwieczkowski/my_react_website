import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Location from './components/pages/Location';
import Contact from './components/pages/Contact';
import Rsvp from './components/pages/Rsvp';

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' exact element={<Home />}></Route>
      <Route path='/location' element={<Location />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/rsvp' element={<Rsvp />}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
