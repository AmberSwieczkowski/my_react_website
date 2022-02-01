/** @format */

import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import RsvpForm from '../RsvpForm';

export default function Rsvp() {
  return (
    <>
      <div className='rsvp'>
        <RsvpForm />
      </div>
      <Footer />
    </>
  );
}
