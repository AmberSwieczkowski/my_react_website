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
              src='https://i.ibb.co/syBLWPG/us-3.jpg'
              text='Ceremony & Reception'
              label='Details'
              path='/location'
            />
            <CardItem
              src='https://i.ibb.co/xqP09Y9/us-9.jpg'
              text='Pictures'
              label='Pictures'
              path='/pictures'
            />
            <CardItem
              src='https://i.ibb.co/Q8RW94M/us-7.jpg'
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
