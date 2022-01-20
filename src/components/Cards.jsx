/** @format */

import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Wedding Details</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/us-5.jpeg'
              text='Ceremony & Reception'
              label='Location'
              path='/location'
            />
            <CardItem
              src='/images/us-8.jpeg'
              text='Pictures'
              label='Pictures'
              path='/pictures'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
                src="/images/img-8.jpg"
                text="Watch the Ceremoney Livestream!"
                label="Livestream"
                path="/"
              />
            <CardItem
              src='/images/us-10.jpg'
              text='RSVP'
              label='RSVP'
              path='/Rsvp'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cards;
