import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { ButtonExtern } from './ButtonExtern';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
    
    <div className='footer-container'>
      

      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Thank you for your visit on my website
        </p>

        {/* <p className='footer-subscription-text'>
          Subscribe to see the latest pictures.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div> */}


      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Me</h2>
            <Link to='/contact'>What is Hivaoa</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              ARNAUD DUPUIS              
              {/* <i class='fab fa-typo3' /> */}
            </Link>
          </div>
          <small class='website-rights'>HIVAOA © 2022</small>

          <div class='social-icons'>

          <a href="mailto:arnaud.dps@hotmail.fr" target="_blank" title='E-Mail' className='Mail'>
    <ButtonExtern 
    className='btns'
    buttonStyle='btn--footer'
    buttonSize='btn--medium'
    >
    <i class="fa">&#xf0e0;</i>
    </ButtonExtern>
    </a>


            <a href="https://www.instagram.com/hivaooa/">
            <ButtonExtern>
            <i class='fab fa-instagram' />
            </ButtonExtern>
            </a>

            <a href="https://www.youtube.com/channel/UCDFCs6mWozaAeB1mKN4SAPQ">
            <ButtonExtern>
            <i class='fab fa-youtube' />
            </ButtonExtern>
            </a>

            <a href="https://www.linkedin.com/in/arnaud-dupuis1/">
            <ButtonExtern>
            <i class='fab fa-linkedin' />
            </ButtonExtern>
            </a>

          </div>
        </div>
      </section>
    </div>
    </>
  );

  

}

export default Footer;
