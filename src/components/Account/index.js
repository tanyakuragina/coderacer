import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import getProfile from '../../redux/thunks/getProfile';
import './account.css';

function Account() {
  const userId = useSelector((state) => state.userId);
  const username = useSelector((state) => state.username);

  return (
    <>
      <div className="account">
        <h1>{userId}</h1>
        <h2>{username}</h2>
      </div>
    </>
  );
}

export default Account;
