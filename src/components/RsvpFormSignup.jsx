/** @format */

import React from 'react';
import useRsvpForm from './useRsvpForm';
import validate from './validateRsvp';
import './RsvpForm.css';

const RsvpFormSignup = ({ submitForm }) => {
  const { handleChange, handleStatus, values, handleSubmit, errors } = useRsvpForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form
        name='rsvp'
        className='form'
        onSubmit={handleSubmit}
        method='POST'
        action='/'
      >
        <input type='hidden' name='form-name' value='rsvp' />
        {/* <h1>RSVP Form</h1> */}
        <div className='form-inputs'>
          <label htmlFor='firstname' className='form-label'>
            First Name
          </label>
          <input
            id='firstname'
            type='text'
            name='firstname'
            className='form-input'
            placeholder='Enter Your First Name'
            value={values.firstname}
            onChange={handleChange}
          />
          {errors.firstname && <p>{errors.firstname}</p>}
        </div>
        <div className='form-inputs'>
          <label htmlFor='lastname' className='form-label'>
            Last Name
          </label>
          <input
            id='lastname'
            type='text'
            name='lastname'
            className='form-input'
            placeholder='Enter Your Last Name'
            value={values.lastname}
            onChange={handleChange}
          />
          {errors.lastname && <p>{errors.lastname}</p>}
        </div>
        <div className='form-inputs'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            id='email'
            type='email'
            name='email'
            className='form-input'
            placeholder='Enter your Email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label htmlFor='guests' className='form-label'>
            Additional People
          </label>
          <input
            id='guests'
            type='text'
            name='guests'
            className='form-input'
            placeholder='Enter None or Name Anyone You Are Bringing'
            value={values.guests}
            onChange={handleChange}
          />
          {errors.guests && <p>{errors.guests}</p>}
        </div>
        <div className='checkboxLabel'>
          <input
            id='coming'
            type='checkbox'
            name='coming'
            className='checkbox'
            value={values.coming}
            onChange={handleStatus}
          />
          <label htmlFor='notComing' className='form-label'>
            We'll be there!
          </label>
        </div>
        <div className='checkboxLabel'>
          <input
            id='notComing'
            type='checkbox'
            name='notComing'
            className='checkbox'
            value={values.notComing}
            onChange={handleStatus}
          />
          <label htmlFor='notComing' className='form-label'>
            Sadly, we are unable to attend.
          </label>
          {errors.coming && <p>{errors.coming}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          RSVP
        </button>
        <span className='form-input-rsvped'>
          {/* <a href='.'>Change Your RSVP Status Here</a> */}
        </span>
      </form>
    </div>
  );
};

export default RsvpFormSignup;
