import React, { useState, useEffect } from 'react';
import {
  Button, Form, FormGroup, Label, Input, FormText,
} from 'reactstrap';
import { useDispatch } from 'react-redux';
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBFormInline,
  MDBAnimation,
} from 'mdbreact';
import signup from '../../redux/thunks/signup.js';

function SignUp() {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    const { username, email, password } = event.target;
    setInputs({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    dispatch(signup(inputs.username, inputs.email, inputs.password));
  }

  return (
    <MDBView>
      <MDBMask className="d-flex justify-content-end align-items-center gradient">
        <MDBContainer className="m-2 p-5">
          <MDBRow>
            <MDBAnimation
              type="fadeInLeft"
              delay=".3s"
              className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
            >
              <div id="backgroundLorem">
                <h1 id="signUp">
                  Зарегистрируйся
                </h1>
                <hr className="hr-light" />
                <h6 className="mb-4" id="lorem">
                  Соревнуйся с реальными игроками.
                </h6>

              </div>
            </MDBAnimation>

            <MDBCol md="6" xl="5" className="mb-4">
              <MDBAnimation type="fadeInRight" delay=".3s">
                <MDBCard id="classic-card">
                  <MDBCardBody className="white-text">
                    <h3 className="text-center" id="registration">
                      <MDBIcon icon="user" />
                      {' '}
                      Регистрация:
                    </h3>
                    <hr className="hr-light" />
                    <Form
                      style={{ width: '300px', margin: '0 auto' }}
                      onSubmit={(e) => { handleSubmit(e); }}
                    >
                      <FormGroup>
                        <Label for="username">Ваш ник</Label>
                        <Input
                          type="text"
                          name="username"
                          placeholder="Новый ник"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                          type="text"
                          name="email"
                          placeholder="Новый email"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                          type="password"
                          name="password"
                          placeholder="Новый пароль"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Button color="primary" type="submit">
                          Зарегистрироваться
                        </Button>
                      </FormGroup>
                    </Form>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBMask>
    </MDBView>
  );
}

export default SignUp;
