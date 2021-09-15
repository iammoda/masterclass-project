import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//Redux
import { Provider } from 'react-redux';
import store from './store';
//Components
import LandingComponent from './components/layout-components/LandingComponent';
import NavbarComponent from './components/layout-components/NavbarComponent';
import CourseCatalogComponent from './components/course-catalog-components/CourseCatalogComponent';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavbarComponent />

          <Container>
            <Switch>
              <Route exact path='/' component={LandingComponent} />
              <Route exact path='/courses' component={CourseCatalogComponent} />
            </Switch>
          </Container>
        </Fragment>
        <ToastContainer />
      </Router>
    </Provider>
  );
}

export default App;
