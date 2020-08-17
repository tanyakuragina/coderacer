import React, { useState, useEffect } from 'react';
import UserStatsList from '../UserStatsList';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from 'react-router-dom';
import './home.css';

export default function Home() {
  return (
    <>
      <div id='homepage'>
        <div>
          <ul>
            <li>
              <a href="default.asp">Профайл</a>
            </li>
            <li>
              <a href="news.asp">Создать игру</a>
            </li>
            <li>
              <a href="contact.asp">Турнирная таблица</a>
            </li>
            <li>
              <a href="about.asp">Тренировочный режим</a>
            </li>
          </ul>
        </div>

        <div className="background_home">
         
          <Link to="/game">Войти в игру</Link>
          <UserStatsList />
        </div>
      </div>
    </>
  );
}
