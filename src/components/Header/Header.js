import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
   
       <div className="bg-dark">
            <div className="row container">
          <div className=" col-sm-12 col-md-5 col-lg-4  d-flex align-items-center justify-content-center">
            <h3 className="text-white ">CODE KNOWLEDGE</h3>
          </div>
          
          <div className="col-sm-12 col-md-6 col-lg-8 ">
              <ul className=" d-flex align-items-end justify-content-end">

                <NavLink to="/home" className="navItemsStyle">
                  <li>Home</li>
                </NavLink>

                <NavLink to="/service" className="navItemsStyle">
                  <li>Service</li>
                </NavLink>

                <NavLink to="/about" className="navItemsStyle">
                  <li>About us</li>
                </NavLink>
               
                <NavLink to="/question" className="navItemsStyle">
                  <li>Question And Answer</li>
                </NavLink>
              </ul>
            </div>
          </div>
       </div>
        
    );
};

export default Header;