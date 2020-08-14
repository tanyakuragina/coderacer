import React, { useState, useEffect } from 'react';
import { useHistory, Link, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import logoutRequest from '../../redux/thunks/logout.js';

export default function Logout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logoutRequest());
  }, []);
  return <Redirect to="/" />;
}
