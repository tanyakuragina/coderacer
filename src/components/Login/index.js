import React, {useState, useEffect} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default function Login() {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    async function getLogin() {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: inputs.email,
          password: inputs.password,
        }),
      });
      const result = await response.json();
    }

    if (inputs.email && inputs.password) {
      getLogin();
    }
  }, [inputs]);

  function handleSubmit(event) {
    event.preventDefault();
    //получаем данные из формы
    const { email, password } = event.target;
    setInputs({
      email: email.value,
      password: password.value,
    });
  }

  return (
    <Form style={{ width: '300px', margin: '0 auto' }} onSubmit={handleSubmit}>
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
          Login
        </Button>
      </FormGroup>
    </Form>
  );
}
