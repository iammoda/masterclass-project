//creating landing component through which can access course catalog
//could potentially have an auth route
//could potentially put login and register buttons

import React from 'react';
import { Container, Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import { Card, CardBody } from 'reactstrap';
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
          <h1>Login to your Account</h1>
        </Col>
      </Row>
      <Card>
        <CardBody>
          <Row>
            <Col>
              <Form>
                <FormGroup>
                  <Label for='exampleEmail'>Email</Label>
                  <Input
                    type='email'
                    name='email'
                    id='exampleEmail'
                    placeholder='hello@gmail.com'
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
                    placeholder='Enter your Password'
                    value={formData.password}
                    onChange={(e) => onChange(e)}
                  />
                </FormGroup>
              </Form>

              <Button
                color='success'
                onClick={(e) => loginUser(formData.email)}
                className='mt-2 mr-2'
              >
                Login
              </Button>
              <br></br>
              <Button color='primary' className='mt-2 ml-2'>
                Register
              </Button>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
};

LandingComponent.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

export default connect(null, { loginUser })(LandingComponent);
