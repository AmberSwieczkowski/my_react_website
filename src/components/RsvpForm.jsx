/** @format */

import React, { useState } from 'react';
import RsvpFormSignup from './RsvpFormSignup';
import RsvpFormSuccess from './RsvpFormSuccess';
import './RsvpForm.css';

const RsvpForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <a href='/' className='close-btn'>
          x
        </a>
        <div className='form-content-left'>
          <img
            src='https://i.ibb.co/16WRS9s/us-5.jpg'
            alt='Marcin and Amber'
            className='form-img'
          />
        </div>
        {!isSubmitted ? (
          <RsvpFormSignup submitForm={submitForm} />
        ) : (
          <RsvpFormSuccess />
        )}
      </div>
    </>
  );
};

export default RsvpForm;
