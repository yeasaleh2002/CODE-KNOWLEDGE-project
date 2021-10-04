import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import About from './components/About/About';
import QandA from './components/QandA/QandA';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';
import CourseDetails from './components/CourseDetails/CourseDetails';
import ExtraCourseDetails from './components/ExtraCourseDetails/ExtraCourseDetails';


function App() {
  return (
    <div className="App">
      
      {/* router declare start */}
     <BrowserRouter>

     <Header></Header>

       <Switch>

     {/* default route declare */}
         <Route exact path="/">
           <Home></Home>
         </Route>

   {/* home route declare */}
         <Route path="/home">
           <Home></Home>
         </Route>

         

             {/* course details route declare */}
            <Route path="/courseDetails/:courseId">
              <CourseDetails></CourseDetails>
            </Route>




   {/* service route declare */}
         <Route path="/service">
           <Service></Service>
         </Route>

    {/*extra course details route declare */}
           <Route path="/extraCourseDetails/:courseId">
              <ExtraCourseDetails></ExtraCourseDetails>
            </Route>


   {/* about route declare */}
         <Route path="/about">
           <About></About>
         </Route>


   {/* question and answer route declare */}
         <Route path="/question">
           <QandA></QandA>
         </Route>


   {/* not found route declare */}
         <Route path="*">
             <Error></Error>
         </Route>

       </Switch>

       <Footer></Footer>
       

     </BrowserRouter>
   {/* router declare end */}

    </div>
  );
}

export default App;
