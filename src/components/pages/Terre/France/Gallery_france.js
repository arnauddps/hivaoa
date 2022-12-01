import React from "react";
import Footer from '../../../Footer';
import Gallery from "../../gallery";
import "../../Gallery.css";
import "../../../Navbar.css";

function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('../../../../../public/images/Terre/France', false, /\.(png|jpe?g|svg)$/));

const Gallery_france = () => {
  return (
  <>
    <Gallery
  left = 'blue'
  middle = 'white'
  right = 'red'
  images_list = {images}></Gallery>
  
   <Footer/>
  </>);
};
 
export default Gallery_france;



