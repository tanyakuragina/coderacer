import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { useHistory } from 'react-router-dom';
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
  MDBAnimation
} from "mdbreact";

function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    async function getSignUp() {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: inputs.username,
          email: inputs.email,
          password: inputs.password,
        }),
      });
      const result = await response.json();
      console.log(result);
    }
    if (inputs.username && inputs.email && inputs.password) {
      getSignUp();
    }
  }, [inputs]);

  function handleSubmit(event) {
    event.preventDefault();
    //получаем данные из формы
    const { username, email, password } = event.target;
    setInputs({
      username: username.value,
      email: email.value,
      password: password.value,
    });
  }

  return (
    <MDBView>
      <MDBMask className="d-flex justify-content-center align-items-center gradient">
        <MDBContainer>
          <MDBRow>
            <MDBAnimation
              type="fadeInLeft"
              delay=".3s"
              className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
            >
              <h1 className="h1-responsive font-weight-bold">
                Зарегистрируйся
              </h1>
              <hr className="hr-light" />
              <h6 className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                repellendus quasi fuga nesciunt dolorum nulla magnam veniam
                sapiente, fugiat! Commodi sequi non animi ea dolor molestiae,
                quisquam iste, maiores. Nulla.
              </h6>
              <MDBBtn outline color="white">
                Learn More
              </MDBBtn>
            </MDBAnimation>

            <MDBCol md="6" xl="4" className="mb-4">
              <MDBAnimation type="fadeInRight" delay=".3s">
                <MDBCard id="classic-card">
                  <MDBCardBody className="white-text">
                    <h3 className="text-center">
                      <MDBIcon icon="user" /> Регистрация:
                    </h3>
                    <hr className="hr-light" />
                    <Form
                      style={{ width: '300px', margin: '0 auto' }}
                      onSubmit={handleSubmit}
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
