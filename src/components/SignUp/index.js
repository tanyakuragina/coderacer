import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function SignUp() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    async function getSignUp() {
      const response = await fetch('/signup', {
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
        <Button color="primary"type="submit">Sign Up</Button>
      </FormGroup>
    </Form>
  );
}

export default SignUp;

// import React, { useState } from 'react';
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// export default () => {
//   const [email, setEmail] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   const onSubmit = async (email, password, username) => {
//     console.log(email, password, username);
//     let user = {
//       email: email,
//       pass: password,
//       username: username,
//     };
//     let response = await (
//       await fetch(`/signup`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(user),
//       })
//     ).json();
//     console.log(response);
//     if (response.ok === 'ok') {
//       setEmail('');
//       setPassword('');
//       setUsername('');
//       setMessage('Вы успешно зарегистрировались!');
//     } else {
//       setMessage('Error');
//     }
//   };

//   return (
//     <Form
//       style={{ width: '300px', margin: '0 auto' }}
//       onSubmit={(e) => handleSubmit(e, onSubmit(email, password))}
//     >
//       <p>{message}</p>
//       <FormGroup>
//         <Label for="email">Email</Label>
//         <Input
//           onChange={(e) => setEmail(e.target.value)}
//           value={email}
//           type="email"
//           placeholder="Email"
//         />
//       </FormGroup>
//       <FormGroup>
//         <Label for="username">Username</Label>
//         <Input
//           onChange={(e) => setUsername(e.target.value)}
//           value={username}
//           type="text"
//           placeholder="username"
//         />
//       </FormGroup>
//       <FormGroup>
//         <Label for="password">Password</Label>
//         <Input
//           value={password}
//           type="password"
//           onChange={(e) => setPassword(e.target.value)}
//           name="password"
//           placeholder="Password"
//         />
//         <Button color="primary">Submit</Button>
//       </FormGroup>
//     </Form>
//   );
// };
