//creating landing component through which can access course catalog
//could potentially have an auth route
//could potentially put login and register buttons

import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export const LandingComponent = () => {
  return (
    <Container>
      <Row>
        <Col align='center'>
          <h1>Hello</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button block color='success' size='md'>
            <Link to='/'>
              <h3 class='text-white'>Login</h3>
            </Link>
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button block color='primary' size='md'>
            <Link to='/'>
              <h3 class='text-white'>Register</h3>
            </Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingComponent;
