import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import newGame from '../../redux/thunks/newGame.js';
import quitGame from '../../redux/thunks/quitGame.js';
import joinGame from '../../redux/thunks/joinGame.js';
import getGames from '../../redux/thunks/getGames.js';
import './home.css';
import Account from '../Account'

export default function Home() {
  const games = useSelector((state) => state.games);
  const currentGame = useSelector((state) => state.game);
  console.log(games);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGames());
  }, []);

  if (games) {
    return (
      <>
        <div className="background_home">
          <div id="maskBack">
            <div className="home">
              <h1>Игры, которые вот-вот начнутся...</h1>
            </div>
            <div className="d-flex justify-content-center">
              <Table
                className="homeTable w-50"
                striped
                bordered
                hover
                variant="dark"
              >
                <thead>
                  <tr>
                    <th>Создатель игры</th>
                    <th>Время начала игры</th>
                    <th>Количество игроков</th>
                  </tr>
                </thead>

                {games ? (
                  games.map((game) => (
                    <tbody>
                      <tr>
                        <td>{game.author}</td>
                        <td>{new Date(game.startDate).toLocaleTimeString('ru-RU')}</td>
                        <td>{`${game.players}/10`}</td>
                        <td>
                          {currentGame ? currentGame._id === game._id && (
                          <Link to={`/game/${game._id}`}>
                            <Button
                              onClick={() => {
                                dispatch(joinGame(game._id));
                              }}
                            >
                              Вернуться
                              в
                              игру
                            </Button>
                          </Link>

                          )
                            : (
                              <Link to={`/game/${game._id}`}>
                                <Button
                                  onClick={() => {
                                    dispatch(joinGame(game._id));
                                  }}
                                >
                                  Зайти
                                  в
                                  игру
                                </Button>
                              </Link>

                            )}
                        </td>
                      </tr>
                    </tbody>
                  ))
                ) : (
                  <div>Загружаем...</div>
                )}
              </Table>
            </div>
            <div className="createGame">
              <h1>Создайте свою игру</h1>
            </div>
            <div className="createGame">
              <Link to="/new-game">
                <Button>
                  Создать игру
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
  return <div>Loading</div>;
}
