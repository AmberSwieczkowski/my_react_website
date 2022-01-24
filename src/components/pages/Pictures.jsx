/** @format */

import React from 'react';
import InfoSection from '../InfoSection';
import Main from '../Main';
import { InfoDataMarcin, InfoDataAmber, InfoDataBoth } from '../InfoData';
import { SliderData } from '../SliderData';
import Footer from '../Footer';

function Pictures() {
  return (
    <>
      <Main slides={SliderData} />
      <InfoSection {...InfoDataAmber} />
      <InfoSection {...InfoDataMarcin} />
      <InfoSection {...InfoDataBoth} />
      <Footer />
    </>
  );
}

export default Pictures;
