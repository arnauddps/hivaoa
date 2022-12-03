import React from "react";
import Banner from '../../Banner';
import Footer from '../../Footer';

import "../Gallery.css";
import "../../Navbar.css";

// import photoFrance from "../../../../public/images/Terre/France/flag_fr.jpg";
// import photoItalie from "../../../../public/images/Terre/Italie/flag_ita.jpg";
// import photoCanada from "../../../../public/images/Terre/Canada/1.jpeg";
// import photoUSA from ;
// import photoUSA from "../../../../public/images/Terre/USA/newyork.jpg";


const MainGallery = () => {

  return (
    <>
    
<h1>test</h1>
{/* 
<div className='Banner_France'>
    <Banner
    text_h ='FRANCE'
    text_p = 'Retour aux sources'
    text_button = "DISCOVER"
    link_button = "/Gallery_france"
    // src_video = '/videos/video-2.mp4'
    image = {photoFrance}
    />
  </div>

  <div className='Banner_Italie'>
    <Banner
    text_h ='ITALIE'
    text_p = 'Scorpri di più'
    text_button = "DISCOVER"
    link_button = "/Gallery_italie"
    // src_video = '/videos/video-2.mp4'
    image = {photoItalie}
    />
  </div>

  <div className='Banner_Canada'>
    <Banner
    text_h ='Canada'
    text_p = 'Eastern wildness'
    text_button = "DISCOVER"
    link_button = "/Gallery_canada"
    // src_video = '/videos/video-2.mp4'
    image = {photoCanada}
    />
  </div> */}

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