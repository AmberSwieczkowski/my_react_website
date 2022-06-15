/** @format */

import React from 'react';
import '../../App.css';
import { SliderData } from '../WeddingPhotoSliderData';
import WeddingPhotoSliderMain from '../WeddingPhotoSliderMain';

function Home() {
  return (
    <>
      <WeddingPhotoSliderMain slides={SliderData} />
    </>
  );
}

export default Home;
