import React, { Fragment, useEffect } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Expert from './pages/experts'
import LoadingPage from './pages/loadingPage';
import Ourexperts from './pages/ourexperts';
import Treatement from './pages/treatements'
import Worldclassexperience from './pages/worldclassexperience'
import Services from "./component/servicesPage/services"
import LandingPage from './component/LandingPage/LandingPage'
// import Submitform from './component/sumbitform/sumbitform'
// import Bottomnav from './component/bottomnav/bottomnav'
import Abouts from './pages/about'
// import About from "./component/aboutPage/aboutpagebootstrap"
import { BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
// import { ParallaxProvider } from 'react-scroll-parallax';
import About from './component/about/about';

import CarouselTesting from './component/Carousel_Testing/CarouselTesting';
import Carousel from './component/Carousel_Testing2/Carousel';
function App() {
  return (
    <Router>
     
        <Fragment>
          <Switch>
            <Route exact path='/' component={LandingPage} />
              <Route
              exact
              path='/loadingPage'
              component={LoadingPage}
            /> 
            <Route exact 
            path='/expert' 
            component={Expert} 
            />
           <Route exact 
            path='/ourexperts' 
            component={ Ourexperts} 
            />
             <Route exact 
            path='/about' 
            component={ About} 
            />
             <Route exact 
            path='/treatement' 
            component={ Treatement} 
            />
            <Route exact 
            path='/landingpage' 
            component={ LandingPage} 
            />
             <Route exact 
            path='/worldclassexperience' 
            component={ Worldclassexperience} 
            />
            <Route exact 
            path='/services' 
            component={Services} 
            />
            <Route exact 
            path='/CarouselTesting' 
            component={CarouselTesting} 
            />
             <Route exact 
            path='/CarouselTesting2' 
            component={Carousel} 
            />
          </Switch>
        </Fragment>
 
    </Router>
 
  );
}

export default App;
