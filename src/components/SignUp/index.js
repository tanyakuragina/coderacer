import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

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
    <Form style={{ width: '300px', margin: '0 auto' }} onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="username">Username</Label>
        <Input type="text" name="username" placeholder="New Username" />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="text" name="email" placeholder="New Email" />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input type="password" name="password" placeholder="New Password" />
      </FormGroup>
      <FormGroup>
        <Button color="primary" type="submit">
          Sign Up
        </Button>
      </FormGroup>
    </Form>
  );
}

export default SignUp;

