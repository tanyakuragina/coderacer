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
        <div className="vertical-bar">
          <ul>
            <li>
              <a className="vertical-item" href="/home">
                Список игр
              </a>
            </li>
            <li>
              <a className="vertical-item" href="/new-game">
                Создать игру
              </a>
            </li>
            <li>
              <a className="vertical-item" href="/about-us">
                О создателях
              </a>
            </li>
          </ul>
        </div>
        <div className="greeting">
          <h1 className="account-title">Личный кабинет</h1>
          <h2 className="greeting-name">Привет, {username}</h2>
        </div>
      </div>
    </>
  );
}

export default Account;
