import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ExtraServiceCourse from '../ExtraServiceCourse/ExtraServiceCourse';


const Service = () => {
      // main home courses state declare
      const [courses, setCourses] = useState([]);


      useEffect(() => {
          fetch(`/codeKnowledgeService.json`)
          .then(response => response.json())
          .then(data => setCourses(data))
      }, [])
  
      return (
          <div className="container my-5">
  
      <Row xs={1} md={2} lg={3} className="g-4">
     
      {
              courses.map(course => <ExtraServiceCourse
                  key = {course._id}
                  course = {course}
                  >
  
                  </ExtraServiceCourse>
                  )
          }
  
     </Row>
         
          </div>
      );
  };
  

export default Service;