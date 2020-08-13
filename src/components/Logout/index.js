import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function Logout() {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    (async () => {
      await fetch('/api/logout');
      dispatch({
        type: 'LOGOUT',
      });
      history.push('/');
    })();
  }, []);
  return <>Идет логаут...</>;
}
