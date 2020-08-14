import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/thunks/logoutRequset.js';

export default function Logout() {
  const dispatch = useDispatch();

  return (
    <Form>
      <FormGroup>
        <Button color="secondary" type="submit" onSubmit={() => { dispatch(logout()); }}>
          Выйти
        </Button>
      </FormGroup>
    </Form>
  );
}
