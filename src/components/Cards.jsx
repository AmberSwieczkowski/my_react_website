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
              path='https://www.arkansas.com/paris/events/cameron-bluff-walk-2'
            />
            <CardItem
              src='/images/us-8.jpeg'
              text='Pictures'
              label='Pictures'
              path='/pictures'
            />
            {/* <CardItem
              src="/images/img-8.jpg"
              text="Watch the Ceremoney Livestream!"
              label="Livestream"
              path="/"
            /> */}
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/images/us-2.jpg'
              text='Registries'
              label='Registries'
              path='/'
            />
            <CardItem
              src='/images/us-6.jpeg'
              text='Contact'
              label='Contact'
              path='/contact'
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
