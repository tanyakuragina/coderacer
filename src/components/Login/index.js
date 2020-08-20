import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import login from '../../redux/thunks/login.js';

export default function Login() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const { email, password } = inputs;

  async function handleSubmit(event) {
    event.preventDefault();
    dispatch(login(email, password));
  }

  function handleChange({ target: { name, value } }) {
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  if (isAuthenticated) return <Redirect to="/home" />;

  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          type="text"
          name="email"
          required
          placeholder="Эл.почта"
          onChange={handleChange}
          value={email}
        />
      </FormGroup>
      <FormGroup>
        <Input
          className="m-2"
          type="password"
          name="password"
          required
          placeholder="Пароль"
          onChange={handleChange}
          value={password}
        />
      </FormGroup>
      <FormGroup>
        <Button color="primary" type="submit">
          Войти
        </Button>
        <div className="error">{error}</div>
      </FormGroup>
    </Form>
  );
}


