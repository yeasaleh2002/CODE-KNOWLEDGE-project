import React from 'react';
import './About.css';

const About = () => {
    return (
              
        <div className="about-style">

        <h1 className="text-info p-5">Address</h1>
        <br />
        

            <div  className="row p-5">
                <div className="col-md-6 ">
                <img className="w-100" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDnGDVm6yPFQPUs01X4jfRxjqHW-7ykiVzQg&usqp=CAU"} alt="" />
                </div>
                <div  className="col-md-6 pt-5">
                    <h5>Code Knowledge is a nationwide online platform <br /> for learning programming language.  We believe <br /> that programming language will bring a new look  <br />  to  the world. This online education system has <br />  been introduced so that we do not fall behind in  <br />  programming Knowledge.</h5>
                </div>
            </div>


  

            <div  className="row p-5">
                
                <div  className="col-md-6 pt-5  d-flex align-items-center justify-content-center">
                <div>
                <h1>Contact Us</h1>
                
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div className="foter-call-icon">
                  <i className="fas fa-phone-volume"></i>
                  </div>
                  <div  className='ms-3'>
                    <h2>+18801643-797859</h2>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  <div className="foter-market-icon">
                  <i className="fas fa-map-marked-alt"></i>
                  </div>
                  <div className='ms-3'>
                    <h3>
                     Road 232 17 Faridpur Dhaka,
                      <br /> Road 493 1782 Pangsha Rajbari Dhaka
                    </h3>
                  </div>
                  
                </div>
              </div>           
        </div>
            
            
         

                <div className="col-md-6">
                <img className="w-100" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVcZOWiNbgVszd6slJSzepsb_A8eHdd9IgbA&usqp=CAU"} alt="" />
                </div>
      </div>
  </div>

        
        


    );
};

export default About;