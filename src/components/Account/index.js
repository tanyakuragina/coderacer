import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import getProfile from '../../redux/thunks/getProfile';
import getPastGames from '../../redux/thunks/getPastGames.js';
import './account.css';
import Edit from '../Edit';

function Account() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userId);
  const username = useSelector((state) => state.username);
  const games = useSelector((state) => state.pastGames);

  useEffect(() => {
    dispatch(getPastGames(userId));
  }, []);

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
          <h2 className="greeting-name">
            Привет,
            {username}
          </h2>
          <Edit />

        </div>
        <div>
          <table>
            {games && games.map((game) => (
              <tbody>
                <tr>
                  <td>{new Date(game.startDate).toLocaleTimeString('ru-RU')}</td>
                  <td>{`${game.players.length}/10`}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}

export default Account;
