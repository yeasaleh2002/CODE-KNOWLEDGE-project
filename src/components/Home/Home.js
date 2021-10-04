import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import MainHomeCourse from '../MainHomeCourse/MainHomeCourse';
import './Home.css';

const Home = () => {

    // main home courses state declare
   const [courses, setCourses] = useState([]);


    // useEffect use and fatch call api 
    useEffect(() => {
        fetch(`/codeKnowledgeHome.json`)
        .then(response => response.json())
        .then(data => setCourses(data))
    }, [])

    return (
       <div className="home-part-style">
            <div className="container py-5">

      {/* home page   */}
    <Row xs={1} md={2} lg={3} className="g-4">

    {/* courses maping */}
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
    </div>
    );
};

export default Home;