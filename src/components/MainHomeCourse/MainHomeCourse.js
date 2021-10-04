import React from 'react';
import './MainHomeCourse.css';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MainHomeCourse = (props) => {

  // destructring props.course
    const {_id, teacherName, courseName, picture, courseFee} = props?.course || {}

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
            

     {/*extra course join now button use dynamic */}
            <Link to={`/courseDetails/${_id}`}>
            <button className="btn btn-primary">Join Now</button>
            </Link>




          </Card.Body>
        </Card>
      </Col>



    );
};

export default MainHomeCourse;