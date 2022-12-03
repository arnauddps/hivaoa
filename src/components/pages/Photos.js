import React from 'react';
import Banner from '../Banner';
import Footer from '../Footer';
import '../Banner.css';
//import '../../App.css';
//import '../HeroSection.css';
// import MainGallery from './Terre/main_gallery_terre';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import photoTerre from "../../images/newyork.jpg";
// import photoEspace from "../../../public/images/newyork.jpg";


export default function Photos() {
  return (

  <>  

  <div className='Banner_terre'>
    <Banner
    text_h ='EARTH'
    text_p = 'Back on track'
    text_button = "DISCOVER"
    link_button = "/main-gallery-terre"
    // src_video = '/videos/video-2.mp4'
    image = "img-1.jpg"
    />
  </div>


  <div className='Banner_espace'>
    <Banner
    text_h ='SPACE'
    text_p = 'Watch & Look Up'
    text_button = "DISCOVER"
    link_button = "/sign-up"
    src_video = '/videos/video-1.mp4'
    image = "img-1.jpg"
    />
  </div>




<Footer />
  </>
    



  );
}
