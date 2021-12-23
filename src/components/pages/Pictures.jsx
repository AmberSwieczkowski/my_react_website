/** @format */

import React from 'react';
import InfoSection from '../InfoSection';
import Main from '../Main';
// import Navbar from './components/Navbar';
import { InfoData } from '../InfoData';
import { SliderData } from '../SliderData';

function App() {
  return (
    <>
      <Main slides={SliderData}/>
      <InfoSection {...InfoData}/>
    </>
  );
}

export default App;
