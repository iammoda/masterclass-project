//creating landing component through which can access course catalog
//could potentially have an auth route
//could potentially put login and register buttons

import React from 'react';
import { Container, Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { loginUser } from '../../actions/authActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const LandingComponent = ({ loginUser }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  console.log(formData);

  return (
    <Container>
      <Row>
        <Col align='center'>
          <h1>Hello</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <FormGroup>
              <Label for='exampleEmail'>Email</Label>
              <Input
                type='email'
                name='email'
                id='exampleEmail'
                placeholder='with a placeholder'
                value={formData.email}
                onChange={(e) => onChange(e)}
              />
            </FormGroup>
            <FormGroup>
              <Label for='examplePassword'>Password</Label>
              <Input
                type='password'
                name='password'
                id='examplePassword'
                placeholder='password placeholder'
                value={formData.password}
                onChange={(e) => onChange(e)}
              />
            </FormGroup>
          </Form>
          <Button
            block
            color='success'
            size='md'
            onClick={(e) => loginUser(formData.email)}
          >
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

LandingComponent.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

export default connect(null, { loginUser })(LandingComponent);
