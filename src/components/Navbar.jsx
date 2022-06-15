/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  let pictureGallery = () => {
    window.open('https://andreapruitt.passgallery.com/9BBvO9MU', '_blank');
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar__container'>
          <Link to='/' className='navbar__logo'>
            MARCIN&AMBER
            <i className='far fa-heart'></i>
          </Link>
          <ul className='nav__menu'>
            <li className='nav__item'>
              <Link to='/' className='nav__links' onClick={pictureGallery}>
                View The Full Picture Gallery
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
