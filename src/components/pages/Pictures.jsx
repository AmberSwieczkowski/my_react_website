/** @format */

import React from 'react';
import InfoSection from '../InfoSection';
import Main from '../Main';
// import Navbar from './components/Navbar';
import { InfoData, InfoDataTwo } from '../InfoData';
import { SliderData } from '../SliderData';

function App() {
  return (
    <>
      <Main slides={SliderData}/>
      <InfoSection {...InfoData}/>
      <InfoSection {...InfoDataTwo}/>
    </>
  );
}

export default App;
