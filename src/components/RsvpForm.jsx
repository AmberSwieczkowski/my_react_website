/** @format */

import React from 'react';
import RsvpFormSignup from './RsvpFormSignup';
import './RsvpForm.css';

const RsvpForm = () => {
  return (
    <>
    <div className="form-container">
        <a href='/' className="close-btn">x</a>
        <div className="form-content-left">
            <img src="./images/us-8.jpeg" alt="Marcin and Amber" className="form-img" />
        </div>
        <RsvpFormSignup />
    </div>
    </>
  );
};

export default RsvpForm;
