import React from 'react';
import { useDispatch } from 'react-redux';
import { FormGroup, Form, Button } from 'reactstrap';

import logoutRequest from '../../redux/thunks/logout.js';

export default function Logout() {
  const dispatch = useDispatch();

  return (
    <Form>
      <FormGroup>
        <Button color="secondary" type="submit" onSubmit={() => { dispatch(logoutRequest()); }}>
          Выйти
        </Button>
      </FormGroup>
    </Form>
  );
}
