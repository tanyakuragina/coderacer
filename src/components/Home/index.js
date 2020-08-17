import React, { useState, useEffect } from 'react';
import UserStatsList from '../UserStatsList';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from 'react-router-dom';

export default function Home() {
  return (
    <div className="background_home">
      <h2 id="chui-color">ЧУИ МЫ ДОМА</h2>
      <Link to="/game">Войти в игру</Link>
      <UserStatsList />
    </div>
  );
}
