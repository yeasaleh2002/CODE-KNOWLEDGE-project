import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-dark text-white pt-4'>
      
          <div className="row container">
            <div className="col-md-5">
              <div className="text-start">
                <h1>CODE KNOWLEAGE</h1>
                <div className="icons-container d-flex text-center ">
                  <i class="footerIconStyle fab fa-facebook"></i>
                  <i class="footerIconStyle fab fa-twitter-square"></i>
                  <i class="footerIconStyle fab fa-youtube"></i>
                  <i class="footerIconStyle fab fa-instagram-square"></i>
                  <i class="footerIconStyle fab fa-skype"></i>
                </div>
                <p className="mt-4 ">
                  <small>
                  A shorthand expression for the portion of the English spelling code students know at any point in the sequence of instruction, i.e. the set of letter-sound correspondences they have learned previously.
                  </small>
                </p>

                <p className="mt-5">
                  <small>COPYRIGHT. © CODE KNOWLEDGE</small>
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div>
                <ul>
                  <li className="footer-menu-title">Home</li>
                  <li className="footer-menu-title">Services</li>
                  <li className="footer-menu-title"> About us</li>
                  <li className="footer-menu-title"> Question And Answer</li>
                </ul>
              </div>
            </div>

            <div className="col-md-4">
              <div>
                <h3>Contact Us</h3>
                
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div className="foter-call-icon">
                  <i class="fas fa-phone-volume"></i>
                  </div>
                  <div  className='ms-3'>
                    <h5>+18801643-797859</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  <div className="foter-market-icon">
                  <i class="fas fa-map-marked-alt"></i>
                  </div>
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