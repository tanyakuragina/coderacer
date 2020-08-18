import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Input, Row,
} from 'reactstrap';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  MDBCol, MDBIcon, MDBView, MDBContainer, MDBCardBody,
} from 'mdbreact';
import signup from '../../redux/thunks/signup.js';
import '../../index.css';
import './signup.css';

function SignUp() {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(signup(inputs.username, inputs.email, inputs.password));
  }

  if (isAuthenticated) return <Redirect to="/home" />;
  return (
    <>
      <div id="mainVideo">
        <video autoPlay muted loop id="background-video">
          <source src="main.mp4" type="video/mp4" />
        </video>
      </div>
      <MDBView>
        <div id="view">
          <div
            className="d-flex justify-content-end align-items-center gradient"
            id="mask"
          >
            <MDBContainer className="m-2 p-5">
              <div id="container" className="m-2 p-5">
                <Row>
                  <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                    <div id="backgroundLorem">
                      <h1 id="signUp">Зарегистрируйся</h1>
                      <hr className="hr-light" />
                      <h6 className="mb-4" id="lorem">
                        Соревнуйся с реальными игроками.
                      </h6>
                    </div>
                  </div>

                  <MDBCol md="6" xl="5" className="mb-4">
                    {/* <MDBAnimation type="fadeInRight" delay=".3s"> */}
                    <div id="signUpAnimation" type="fadeInRight" delay=".3s">
                      <div className="card">
                        <MDBCardBody className="white-text m-3">
                          <h3 className="text-center" id="registration">
                            <MDBIcon icon="user" />
                            {' '}
                            Регистрация:
                          </h3>
                          <hr className="hr-light" />
                          <Form
                            style={{
                              width: '300px',
                              margin: '0 auto',
                              height: '300px',
                            }}
                            onSubmit={(e) => {
                              handleSubmit(e);
                            }}
                          >
                            <FormGroup>
                              {/* <Label for="username">Ваш ник</Label> */}
                              <Input
                                type="text"
                                name="username"
                                placeholder="Новый ник"
                                onChange={(e) => {
                                  setInputs({
                                    ...inputs,
                                    username: e.target.value,
                                  });
                                }}
                              />
                            </FormGroup>
                            <FormGroup>
                              {/* <Label for="email">Email</Label> */}
                              <Input
                                type="text"
                                name="email"
                                placeholder="Новый email"
                                onChange={(e) => {
                                  setInputs({
                                    ...inputs,
                                    email: e.target.value,
                                  });
                                }}
                              />
                            </FormGroup>
                            <FormGroup>
                              {/* <Label for="password">Password</Label> */}
                              <Input
                                type="password"
                                name="password"
                                placeholder="Новый пароль"
                                onChange={(e) => {
                                  setInputs({
                                    ...inputs,
                                    password: e.target.value,
                                  });
                                }}
                              />
                            </FormGroup>
                            <FormGroup>
                              <Button color="primary" type="submit">
                                Зарегистрироваться
                              </Button>
                            </FormGroup>
                          </Form>
                        </MDBCardBody>
                      </div>
                    </div>
                    {/* </MDBAnimation> */}
                  </MDBCol>
                </Row>
              </div>
            </MDBContainer>
            {/* </MDBMask> */}
          </div>
        </div>
      </MDBView>
    </>
  );
}

export default SignUp;
