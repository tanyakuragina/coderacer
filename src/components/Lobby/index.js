import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UserStatsList from '../UserStatsList';

export default function Lobby() {
  const dispatch = useDispatch();

  

  dispatch();

  return (
    <div className="background_home">
      <h2>LOBBY</h2>
      <UserStatsList />
    </div>
  );
}
