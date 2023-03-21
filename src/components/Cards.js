import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC skills!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Learning Ethical Hacking with an Enhanced Experience'
              label='CS & IT'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Learning Bansuri Vadan.'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Videography & Photography'
              label='Creative'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Designing epic games!'
              label='Gaming'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Becoming a social media star!'
              label='Socialising'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
