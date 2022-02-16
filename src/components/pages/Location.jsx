/** @format */

import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import '../Button.css';
import Footer from '../Footer';
import {
  DressCodeDetails,
  InfoDataCeremony,
  InfoDataReception,
  LiveStreamData,
} from '../LocationSectionData';
import LocationSection from '../LocationSection';
import '../Printer.css';
import { Link } from 'react-router-dom';

export default function Location() {
  let print = () => {
    window.print();
  };

  let registry = () => {
    window.open('https://www.amazon.com/wedding/share/marcin-amber', '_blank');
  };

  let thePark = () => {
    window.open(
      'https://www.arkansasstateparks.com/parks/mount-magazine-state-park',
      '_blank'
    );
  };
  
  return (
    <>
      <div className='location'></div>
      <div className='btn_print_container no__print'>
        <Button
          toPage='/location'
          buttonStyle='btn__print'
          className='btn__print'
          buttonSize='btn__xlarge'
          onClick={print}
        >
          Print
        </Button>
        <Button
          toPage='/location'
          buttonStyle='btn__print'
          className='btn__print'
          buttonSize='btn__xlarge'
          onClick={thePark}
        >
          Mount Magazine
        </Button>
        <Button
          toPage='/location'
          buttonStyle='btn__print'
          className='btn__print'
          buttonSize='btn__xlarge'
          onClick={registry}
        >
          Registry
        </Button>
      </div>
      <div className='printable'>
        <LocationSection {...InfoDataCeremony} />
        <LocationSection {...InfoDataReception} />
        <LocationSection {...DressCodeDetails} />
        {/* <LocationSection {...LiveStreamData} /> */}
      </div>
      <Footer />
      <p className='print__only'>marcin-amber.com</p>
    </>
  );
}
