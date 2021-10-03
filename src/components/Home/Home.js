import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import MainHomeCourse from '../MainHomeCourse/MainHomeCourse';

const Home = () => {

    // main home courses state declare
   const [courses, setCourses] = useState([]);


    useEffect(() => {
        fetch(`/codeKnowledgeHome.json`)
        .then(response => response.json())
        .then(data => setCourses(data))
    }, [])

    return (
        <div className="container my-5">

    <Row xs={1} md={2} lg={3} className="g-4">
   
    {
            courses.map(course => <MainHomeCourse
                key = {course._id}
                course = {course}
                >

                </MainHomeCourse>
                )
        }

   </Row>
       
        </div>
    );
};

export default Home;