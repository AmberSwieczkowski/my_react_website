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
    <div className="form-container">
        <span className="close-btn">x</span>
        <div className="form-content-left">
            <img src="./images/us-8.jpeg" alt="Marcin and Amber" className="form-img" />
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
