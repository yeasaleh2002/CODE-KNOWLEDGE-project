import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ExtraServiceCourse = (props) => {
    const {teacherName, courseName, picture, courseFee} = props?.course || {}

    return (
             
        <Col>
        <Card className="card-style">
            <div className=" d-flex align-items-center justify-content-center ">
            <Card.Img className="card-img-style" variant="top" src={picture} />
            </div>
          <Card.Body className="card-body-style">
            <Card.Title><h2>{courseName}</h2></Card.Title>
           
            <h4> 
             <Card.Text>
            <b>Course fee:</b> {courseFee} 
            </Card.Text>
            </h4>

            <h4> 
             <Card.Text>
             <b>Teacher Name:</b> {teacherName}
            </Card.Text>
            </h4>
            
          </Card.Body>
        </Card>
      </Col>



    );
};

export default ExtraServiceCourse;