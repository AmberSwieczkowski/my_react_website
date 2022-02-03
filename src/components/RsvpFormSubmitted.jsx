/** @format */

import React from 'react';
import RsvpFormSuccess from './RsvpFormSuccess';
import './RsvpForm.css';

const RsvpFormSubmitted = () => {
  return (
    <>
    <div className="form-container">
        <a href='/' className="close-btn">x</a>
        <div className="form-content-left">
            <img src="./images/us-8.jpeg" alt="Marcin and Amber" className="form-img" />
        </div>
        <RsvpFormSuccess />
    </div>
    </>
  );
};

export default RsvpFormSubmitted;
