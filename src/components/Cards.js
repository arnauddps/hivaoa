import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
// import CardItem from '../../public/images/';

// import photoPortrait from '../images/agathe.jpg';
// import photoCanada from '../images/Terre/Canada/1.jpeg';
// import photoUSA from '../images/Terre/USA/newyork.jpg';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out the last pictures!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src= './images/agathe.jpg'
              text='People who have the power'
              label='Portraits'
              path='/services'
            />
            <CardItem
              src= '/images/Terre/Canada/1.jpeg'
              text='Travel through the mountains of Eastern Canada'
              label='Canada'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src= '/images/Terre/Canada/1.jpeg'
              text='Witness the highlights of the city that never sleeps : New York City'
              label='USA'
              path='/services'
            />
            <CardItem
              src= '/images/Terre/Canada/1.jpeg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src= '/images/Terre/Canada/1.jpeg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
