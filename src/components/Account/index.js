import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import getProfile from '../../redux/thunks/getProfile'
import './account.css'

function Account() {
  const userId = useSelector((state) => state.userId);
  const user = useSelector((state) => state.user)
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile(id));
  }, [id]);

  return (
    <>
     <div className='account'>hello</div>
     <h1>{user?.username}</h1>
     <h1>{userId}</h1>
    </>
  );
}

export default Account;
