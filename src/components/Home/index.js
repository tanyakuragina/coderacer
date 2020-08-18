import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import newGame from '../../redux/thunks/newGame.js';
import quitGame from '../../redux/thunks/quitGame.js';
import joinGame from '../../redux/thunks/joinGame.js';
import getGames from '../../redux/thunks/getGames.js';
import './home.css';

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
            <Link to="/game">Войти в игру</Link>
            <br />
            <br />
            <Link to="/new-game">
              <Button
                onClick={() => {
                  dispatch(newGame(new Date('2020-08-16T18:30:00')));
                }}
              >
                Создать игру (тест)
              </Button>
            </Link>
            <br />
            <br />
            <br />
            <br />
            <Button
              onClick={() => {
                dispatch(quitGame('5f391aa214d409b5ed9fc65a'));
              }}
            >
              Выйти из игры (тест)
            </Button>
            <div className="d-flex justify-content-center">
              <Table className="w-25" striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>ID игры</th>
                    <th>Автор игры</th>
                    <th>Время начала игры</th>
                    <th>Количество игроков</th>
                  </tr>
                </thead>

                {games ? (
                  games.map((game) => (
                    <tbody>
                      <tr>
                        <td>{game._id}</td>
                        <td>{game.author}</td>
                        <td>{game.startDate}</td>
                        <td>{game.players}</td>
                        <td>
                          <Link to={`/game/${game._id}`}>
                            <Button
                              onClick={() => {
                                dispatch(joinGame(game._id));
                              }}
                            >
                              Зайти в игру (тест)
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  ))
                ) : (
                  <div>Загружаем...</div>
                )}
              </Table>
            </div>
          </div>
        </div>
      </>
    );
  }
}
