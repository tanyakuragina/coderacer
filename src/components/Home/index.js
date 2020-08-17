import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import UserStatsList from '../UserStatsList';
import newGame from '../../redux/thunks/newGame.js';
import quitGame from '../../redux/thunks/quitGame.js';
import joinGame from '../../redux/thunks/joinGame.js';
import getGames from '../../redux/thunks/getGames.js';

export default function Home() {
  const games = useSelector((state) => state.games);
  const currentGame = useSelector((state) => state.game);
  console.log(games);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGames());
  }, []);

  if (games)
    return (
      <>
        <div className="background_home">
          <h2 id="chui-color">ЧУИ МЫ ДОМА</h2>
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
          <Button
            onClick={() => {
              dispatch(joinGame('5f391aa214d409b5ed9fc65a'));
            }}
          >
            Зайти в игру (тест)
          </Button>
          <br />
          <br />
          <Button
            onClick={() => {
              dispatch(quitGame('5f391aa214d409b5ed9fc65a'));
            }}
          >
            Выйти из игры (тест)
          </Button>
          {games ? (
            games.map((game) => (
              <div>
                ID игры: {game._id}. Автор игры: {game.author}. Время начала
                игры:
                {game.startDate}. Количество игроков: {game.players.length}
                {currentGame ? (
                  <Link to={`/game/${game._id}`}>
                    <Button
                      disabled={joinGame ? 'click' : 'dont'}
                      onClick={() => {
                        dispatch(joinGame(game._id));
                      }}
                    >
                      Зайти в игру (тест)
                    </Button>
                  </Link>
                ) : (
                  <Link to={`/game/${game._id}`}>
                    <Button
                      onClick={() => {
                        dispatch(joinGame(game._id));
                      }}
                    >
                      Перейти в игру (тест)
                    </Button>
                  </Link>
                )}
              </div>
            ))
          ) : (
            <div>Загружаем...</div>
          )}
        </div>
      </>
    );
}
