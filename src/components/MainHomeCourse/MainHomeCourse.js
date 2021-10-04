import React from 'react';
import './MainHomeCourse.css';
import { Card, Col } from 'react-bootstrap';

const MainHomeCourse = (props) => {

  // destructring props.course
    const {teacherName, courseName, picture, courseFee} = props?.course || {}

    return (
      
        <Col>

        {/* card section using react bootstrap */}
        <Card className="card-style">

          {/*main course image use dynamic */}
            <div className=" d-flex align-items-center justify-content-center ">
            <Card.Img className="card-img-style" variant="top" src={picture} />
            </div>

            {/*main course name use dynamic */}
          <Card.Body className="card-body-style">
            <Card.Title><h2>{courseName}</h2></Card.Title>
           

           {/*main course fee use dynamic */}
            <h4> 
             <Card.Text>
            <b>Course fee:</b> {courseFee} 
            </Card.Text>
            </h4>


           {/*extra course teacher name use dynamic */}
            <h4> 
             <Card.Text>
             <b>Teacher Name:</b> {teacherName}
            </Card.Text>
            </h4>
            
            {/*extra course buy now button use dynamic */}
            <button className="btn btn-primary">Buy Now</button>

          </Card.Body>
        </Card>
      </Col>



    );
};

export default MainHomeCourse;