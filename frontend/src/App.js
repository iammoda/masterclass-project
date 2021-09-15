import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
//Redux
import { Provider } from 'react-redux';
import store from './store';
//Components
import LandingComponent from './components/layout-components/LandingComponent';
import NavbarComponent from './components/layout-components/NavbarComponent';

function App() {
  return (
    <Router>
      <Fragment>
        <NavbarComponent />
        <Route exact path='/' component={LandingComponent} />
      </Fragment>
    </Router>
  );
}

export default App;
