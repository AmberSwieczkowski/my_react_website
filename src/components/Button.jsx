/** @format */

import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn__primary', 'btn__secondary', 'btn__outline'];

const SIZES = ['btn__medium', 'btn__large'];

const PAGES = ['/home', '/location', '/pictures', '/rsvp'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  toPage,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const checkToPage = PAGES.includes(toPage) ? toPage : PAGES[0];

  return (
    <Link to={checkToPage} className='btn__mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
