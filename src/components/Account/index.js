import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
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
          <h2 className="greeting-name mb-4">
            Привет,
            {` ${username}`}
          </h2>
          <Edit />

        </div>
        <div>
          <h2 className="mt-3 mx-5">Прошлые игры:</h2>
          <Table variant="dark" className="m-5">
            <thead>
              <th>Создатель игры</th>
              <th>Дата начала</th>
              <th>Количество игроков</th>
            </thead>
            <tbody>
              {games && games.map((game) => (
                <tr>
                  <td>{game.author.username}</td>
                  <td>
                    {new Date(game.startDate).toLocaleTimeString('ru-RU', {
                      month: 'numeric',
                      day: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric',
                    })}
                  </td>
                  <td>{`${game.players.length}/10`}</td>
                  <td><Link to={`/finish/${game._id}`}><button className="btn btn-success">Просмотреть результаты</button></Link></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default Account;
