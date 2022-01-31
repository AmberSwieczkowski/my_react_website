/** @format */

import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import '../Button.css';
import Footer from '../Footer';
import { InfoDataCeremony, InfoDataReception } from '../LocationSectionData';
import LocationSection from '../LocationSection';

export default function Location() {
  return (
    <>
      <div className='location'></div>
      <div className='btn_print_container'>
        <Button toPage='/' buttonStyle='btn__print' className='btn__print' buttonSize='btn__xlarge'>
          Print This Page
        </Button>
      </div>
      <LocationSection {...InfoDataCeremony} />
      <LocationSection {...InfoDataReception} />
      <Footer />
    </>
  );
}
