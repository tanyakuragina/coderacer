import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import UserStatsList from '../UserStatsList';
import newGame from '../../redux/thunks/newGame.js';
import quitGame from '../../redux/thunks/quitGame.js'
import joinGame from '../../redux/thunks/joinGame.js'

export default function Home() {
  const dispatch = useDispatch();
  return (
    <div className="background_home">
      <h2 id="chui-color">ЧУИ МЫ ДОМА</h2>
      <Link to="/game">Войти в игру</Link>
      <br />
      <br />
      <Button onClick={() => { dispatch(newGame(new Date('2020-08-16T18:30:00'))); }}>Создать игру (тест)</Button>
      <br />
      <br />
      <Button onClick={() => { dispatch(joinGame('5f391aa214d409b5ed9fc65a')); }}>Зайти в игру (тест)</Button>
      <br />
      <br />
      <Button onClick={() => { dispatch(quitGame('5f391aa214d409b5ed9fc65a')); }}>Выйти из игры (тест)</Button>
      <UserStatsList />
    </div>
  );
}
