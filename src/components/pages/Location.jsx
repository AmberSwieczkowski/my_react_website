/** @format */

import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import '../Button.css';
import Footer from '../Footer';
import { InfoDataCeremony, InfoDataReception } from '../LocationSectionData';
import LocationSection from '../LocationSection';
import '../Printer.css'

export default function Location() {
  let print = () => {
    window.print();
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
          Print This Page
        </Button>
      </div>
      <div className='printable' media='print'>
      <LocationSection {...InfoDataCeremony} />
      <LocationSection {...InfoDataReception} />
      </div>
      <Footer />
      <p className="print__only">marcin-amber.com</p>
    </>
  );
}
