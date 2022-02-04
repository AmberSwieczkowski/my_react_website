/** @format */

import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  let registry = () => {
    window.open('https://www.amazon.com/wedding/share/marcin-amber', '_blank');
  };

  let thePark = () => {
    window.open(
      'https://www.arkansasstateparks.com/parks/mount-magazine-state-park',
      '_blank'
    );
  };
  return (
    <div className='cards'>
      <h1>Wedding Details</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/us-5.jpeg'
              text='Ceremony & Reception'
              label='Details'
              path='/location'
            />
            <CardItem
              src='/images/us-8.jpeg'
              text='Pictures'
              label='Pictures'
              path='/pictures'
            />
            <CardItem
              src='/images/us-6.jpeg'
              text='RSVP'
              label='RSVP'
              path='/rsvp'
            />
            {/* <CardItem
              src='/images/us-10.JPG'
              text='Registry'
              label='Amazon'
              path='/'
              onClick={registry}
            /> */}
          </ul>
          <ul className='cards__items'>
            {/* <CardItem
              src='/images/us-2.JPG'
              text='Mount Magazine'
              label='Paris'
              path='/'
              onClick={thePark}
            /> */}
            {/* </ul>
          <ul className='cards__items'> */}
            {/* <CardItem
                src="/images/img-8.jpg"
                text="Watch the Livestream!"
                label="Livestream"
                path="/"
              /> */}
            {/* <CardItem
              src='/images/us-6.jpeg'
              text='RSVP'
              label='RSVP'
              path='/rsvp'
            /> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cards;
