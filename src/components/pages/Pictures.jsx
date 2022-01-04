/** @format */

import React from 'react';
import InfoSection from '../InfoSection';
import Main from '../Main';
import { InfoDataMarcin, InfoDataAmber, InfoDataBoth } from '../InfoData';
import { SliderData } from '../SliderData';

function Pictures() {
  return (
    <>
      <Main slides={SliderData} />
      <InfoSection {...InfoDataAmber} />
      <InfoSection {...InfoDataMarcin} />
      <InfoSection {...InfoDataBoth} />
    </>
  );
}

export default Pictures;
