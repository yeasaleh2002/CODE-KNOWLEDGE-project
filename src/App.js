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


function App() {
  return (
    <div className="App">
      
     <BrowserRouter>

     <Header></Header>

       <Switch>

         <Route exact path="/">
           <Home></Home>
         </Route>

         <Route path="/home">
           <Home></Home>
         </Route>

         <Route path="/service">
           <Service></Service>
         </Route>

         <Route path="/about">
           <About></About>
         </Route>

         <Route path="/question">
           <QandA></QandA>
         </Route>

         <Route path="*">
             <Error></Error>
         </Route>

       </Switch>

       <Footer></Footer>

     </BrowserRouter>
    </div>
  );
}

export default App;
