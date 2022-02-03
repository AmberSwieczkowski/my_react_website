/** @format */

import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import RsvpFormSubmitted from '../RsvpFormSubmitted';

export default function RsvpSubmitted() {
  return (
    <>
      <div className='rsvp'>
        <RsvpFormSubmitted />
      </div>
      <Footer />
    </>
  );
}
