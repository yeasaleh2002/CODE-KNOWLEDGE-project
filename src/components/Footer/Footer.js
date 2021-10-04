import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {

    return (
        <div className='bg-dark text-white pt-4'>
      
          <div className="row container">
            <div className="col-md-5">
              <div className="text-start">
                <h1>CODE KNOWLEAGE</h1>

                {/* footer social media icon  */}
                <div className="icons-container d-flex text-center ">
                  <i className="footerIconStyle fab fa-facebook"></i>
                  <i className="footerIconStyle fab fa-twitter-square"></i>
                  <i className="footerIconStyle fab fa-youtube"></i>
                  <i className="footerIconStyle fab fa-instagram-square"></i>
                  <i className="footerIconStyle fab fa-skype"></i>
                </div>

                  {/* write some text about website */}
                <p className="mt-4 ">
                  <small>
                  A shorthand expression for the portion of the English spelling code students know at any point in the sequence of instruction, i.e. the set of letter-sound correspondences they have learned previously.
                  </small>
                </p>

                   {/* Copy right using */}
                <p className="mt-5">
                  <small>COPYRIGHT. © CODE KNOWLEDGE</small>
                </p>
              </div>
            </div>

             {/*  footer menu title */}
            <div className="col-md-3">
              <div>
                <ul>
                  
                  <NavLink to="/home" className="footer-menu-navLink">
                  <li>Home</li>
                </NavLink>

                <NavLink to="/service" className="footer-menu-navLink">
                  <li>Service</li>
                </NavLink>

                <NavLink to="/about" className="footer-menu-navLink">
                  <li>About us</li>
                </NavLink>
               
                <NavLink to="/question" className="footer-menu-navLink">
                  <li>Question And Answer</li>
                </NavLink>
                </ul>
              </div>
            </div>

              {/*  footer contact us part */}
            <div className="col-md-4">
              <div>
                <h3>Contact Us</h3>
                
                {/* call icon */}
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div className="footer-call-icon">
                  <i className="fas fa-phone-volume"></i>
                  </div>

                  {/* phone number */}
                  <div  className='ms-3'>
                    <h5>+18801643-797859</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                 
                 {/* market icon */}
                 <div className="footer-market-icon">
                  <i className="fas fa-map-marked-alt"></i>
                  </div>

                  {/* address */}
                  <div className='ms-3'>
                    <p>
                     Road 232 17 Faridpur Dhaka,
                      <br /> Road 493 1782 Pangsha Rajbari Dhaka
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
    );
};

export default Footer;