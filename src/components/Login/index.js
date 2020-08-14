import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button, Form, FormGroup, Label, Input, FormText,
} from 'reactstrap';
import { FormControl } from 'react-bootstrap';
import { login } from '../../redux/thunks/login.js';

export default function Login() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);
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

// import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

// export default function Login() {
//   const history = useHistory();
//   const [inputs, setInputs] = useState({
//     email: '',
//     password: '',
//   });

//   useEffect(() => {
//     async function getLogin() {
//       const response = await fetch('/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: inputs.email,
//           password: inputs.password,
//         }),
//       });
//       const result = await response.json();
//     }

//     if (inputs.email && inputs.password) {
//       getLogin();
//     }
//   }, [inputs]);

//   function handleSubmit(event) {
//     event.preventDefault();
//     //получаем данные из формы
//     const { email, password } = event.target;
//     setInputs({
//       email: email.value,
//       password: password.value,
//     });
//     // history.push('/');
//   }

//   return (
//     <Form style={{ width: '300px', margin: '0 auto' }} onSubmit={handleSubmit}>
//       <FormGroup>
//         <Label for="email">Email</Label>
//         <Input type="text" name="email" placeholder="New Email" />
//       </FormGroup>
//       <FormGroup>
//         <Label for="password">Password</Label>
//         <Input type="password" name="password" placeholder="New Password" />
//       </FormGroup>
//       <FormGroup>
//         <Button color="primary" type="submit">
//           Login
//         </Button>
//       </FormGroup>
//     </Form>
//   );
// }
