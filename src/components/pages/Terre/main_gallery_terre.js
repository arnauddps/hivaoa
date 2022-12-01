import React from "react";
import "../Gallery.css";
import Footer from '../../Footer';
import Banner from '../../Banner';
import "../../Navbar.css";






const MainGallery = () => {

  return (
    <>
    

<div className='Banner_France'>
    <Banner
    text_h ='FRANCE'
    text_p = 'Retour aux sources'
    text_button = "DISCOVER"
    link_button = "/Gallery_france"
    // src_video = '/videos/video-2.mp4'
    image = "/images/newyork.jpg"
    />
  </div>

  <div className='Banner_Italie'>
    <Banner
    text_h ='ITALIE'
    text_p = 'Scorpri di più'
    text_button = "DISCOVER"
    link_button = "/Gallery_italie"
    // src_video = '/videos/video-2.mp4'
    image = "/images/img-2.jpg"
    />
  </div>

  <div className='Banner_Canada'>
    <Banner
    text_h ='Canada'
    text_p = 'Eastern wildness'
    text_button = "DISCOVER"
    link_button = "/Gallery_canada"
    // src_video = '/videos/video-2.mp4'
    image = "/images/img-3.jpg"
    />
  </div>

  <div className='Banner_USA'>
    <Banner
    text_h ='ÉTATS-UNIS'
    text_p = 'Heart of America'
    text_button = "DISCOVER"
    link_button = "/Gallery_USA"
    // src_video = '/videos/video-2.mp4'
    image = "/images/Terre/USA/newyork.jpg"
    />
  </div>

  <Footer/>



    </>
      
  );
};
 
export default MainGallery;

/*




  

  */