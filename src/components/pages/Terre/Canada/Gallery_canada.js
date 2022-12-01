import React,{useState} from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import "../../Gallery.css";
import Footer from '../../../Footer';
import "../../../Navbar.css";
import Roundflag from "../round_flag";


const images = [
    "images/img-1.jpg",
    "images/img-2.jpg",
    "images/img-3.jpg",
    "images/img-4.jpg",
    "images/img-5.jpg",
    "images/img-6.jpg",
    "images/img-7.jpg",
    "images/img-8.jpg",
    "images/img-9.jpg",
    "images/newyork.jpg",
    "images/img-1.jpg",
    "images/img-2.jpg",
    "images/img-3.jpg",
    "images/img-4.jpg",
    "images/img-5.jpg",
    "images/img-6.jpg",
    "images/img-7.jpg",
    "images/img-8.jpg",
    "images/img-9.jpg",
    "images/newyork.jpg",
    "images/img-1.jpg",
    "images/img-2.jpg",
    "images/img-3.jpg",
    "images/img-4.jpg",
    "images/img-5.jpg",
    "images/img-6.jpg",
    "images/img-7.jpg",
    "images/img-8.jpg",
    "images/img-9.jpg",
    "images/newyork.jpg",
]


// Masory Options
const masonryOptions = {
  gutter: "20px",
};



const Gallery_canada = () => {
const [data,setData] = useState({img:'', i: 0})

  const viewImage = (img, i)=>{
    setData({img, i})
    console.log(img,i)
  }

  // ACTIONS BOUTONS
  const imgAction = (action) => {
    let i = data.i;
    if (action === 'next-img'){
      setData({img: images[i+1], i: i + 1});
    }
    if (action === 'previous-img'){
      setData({img: images[i-1], i: i - 1});
    }
    if(!action){
      setData({img:'',i:0});
    }
  }

  const [click, setClick] = useState(false);


  return (
    <>
    {data.img &&
    <div className="image_display_background">

    <div className="zone-click-screen--left" onClick={()=> imgAction('previous-img')}>
    </div>
    <div className="zone-click-screen--right" onClick={()=> imgAction('next-img')}>
    </div>

    
    <div onClick={()=> imgAction()}
      style = {{position: 'absolute', right:'20px', top:'0px', fontSize:'40px'}}>
      <i className={'fas fa-times' } />
    </div>

    <div onClick={()=> imgAction('previous-img')}
      style = {{position: 'absolute', left:'150px', top:'40vh', fontSize:'30px', color:'#242424'}}>
      <i class="fa fa-angle-left" aria-hidden="true" />
    </div>

    <div onClick={()=> imgAction('next-img')}
      style = {{position: 'absolute', right:'150px', top:'40vh', fontSize:'30px', color:'#242424'}}>
      <i class="fa fa-angle-right" aria-hidden="true" />
      {/* <i class="fa fa-arrow-right-o"></i> */}
    </div>
    
    
     <img src={data.img} 
           style = {{width: 'auto', 
                  maxWidth: '100%', 
                  maxHeight: '80vh', 
                  marginTop: '-80px'}} 
                  />
   
    </div>
    }
    
    <Roundflag
    left = 'red'
    middle = 'white'
    right = 'red'
    />

<div className="galerie-container">
    <div className="galerie">
    <ResponsiveMasonry
      columnsCountBreakPoints={{200: 1, 400: 2, 600: 3, 800: 4}} >
      <Masonry gutter="10px" >

        {images.map((image, i) => (
        <div className="image_item">
          <img
            key={i}
            src={image}
            alt=""
            onClick={()=>viewImage(image, i )}
          />
          </div>
          ))}
      </Masonry>
    </ResponsiveMasonry>
    </div>
    </div>

  <Footer/>

</>);
};
 
export default Gallery_canada;
