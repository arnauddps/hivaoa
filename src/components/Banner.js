import React from 'react';
// import {BrowserRouter as Router, Link} from 'react-router-dom';
import { Button } from './Button';
// import { Link } from 'react-router-dom';
import './Banner.css';
import { ButtonExtern } from './ButtonExtern';



function Banner(props) {
    return (
      
      <>
<div className='banner-container'>
      {/* <video src = {props.src_video} autoPlay loop muted /> */}
    
      <img src = {props.image}></img>
      <h1>{props.text_h}</h1>
      <p1>{props.text_p}</p1>

        <div className='banner-btns'>
          <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          path = {props.link_button}
          element = {props.link_element}>
          {props.text_button}
           </Button>
      </div>
</div>


</>  
    );
  }

  export default Banner;



