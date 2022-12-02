import React from 'react';
// import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import video1 from "../videos/cotentin.mp4";

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src= {video1} autoPlay muted loop/>
      
      <h1>WELCOME TO HIVAOA</h1>
      <p1>Rediscover our world</p1>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          path = '/photos'
        >
          PHOTOS
        </Button>
        
        <Button 
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          path = '/videos'
        >
          VIDEOS <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
