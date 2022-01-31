/** @format */

import React from 'react';
import useRsvpForm from './useRsvpForm';
import validate from './validateRsvp';
import './RsvpForm.css';

const RsvpFormSignup = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useRsvpForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>RSVP by filling out the information below.</h1>
        <div className='form-inputs'>
          <label htmlFor='username' className='form-label'>
            Username
          </label>
          <input
            id='username'
            type='text'
            name='username'
            className='form-input'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
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
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            id='password'
            type='password'
            name='password'
            className='form-input'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label htmlFor='password2' className='form-label'>
            Confirm Password
          </label>
          <input
            id='password2'
            type='password'
            name='password2'
            className='form-input'
            placeholder='Enter your password2'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          RSVP
        </button>
        <span className='form-input-rsvped'>
        <a href='.'>Change Your RSVP Status Here</a>
        </span>
      </form>
    </div>
  );
};

export default RsvpFormSignup;
