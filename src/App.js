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
import { BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import About from './component/about/about';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <Router>
     
        <Fragment>
          <Switch>
            <Route exact path='/' component={LoadingPage} />
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
            path='/abouts' 
            component={ Abouts} 
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
          </Switch>
        </Fragment>
 
    </Router>
 
  );
}

export default App;
