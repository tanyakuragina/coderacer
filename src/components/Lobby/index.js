import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import Timer, { initialTime } from 'react-compound-timer';
import useInterval from '../../hooks/useInterval.js';
import getOneGame from '../../redux/thunks/getOneGame';
import quitGame from '../../redux/thunks/quitGame';
import './lobby.css';

function Lobby() {
  const game = useSelector((state) => state.game);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isGameStarted, setIsGameStarted] = useState(false);

  useEffect(() => {
    dispatch(getOneGame(id));
  }, [id]);

  useInterval(() => {
    dispatch(getOneGame(id));
  }, 5000);
  let i = 0;
  return (
    <>
      <div id="lobbyVideo">
        <video autoPlay muted loop id="background-lobby-video">
          <source src="../lobby.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="lobby">
      <div className="lobby_shadow"></div>
        <div>
          <h1 className="textCenter">Игра скоро начнется</h1>
          {game && new Date(game.startDate).getTime() > Date.now() && (
            <Timer
              initialTime={new Date(game.startDate).getTime() - Date.now()}
              direction="backward"
              checkpoints={[
                {
                  time: 0,
                  callback: () => setIsGameStarted(true),
                },
              ]}
            >
              <h4 className="textCenter">
                До начала игры осталось:
                <Timer.Hours /> ч.
                <Timer.Minutes /> мин.
                <Timer.Seconds /> сек.
              </h4>
            </Timer>
          )}
          {isGameStarted && (
            <Link to="/game">
              <button>Начать игру</button>
            </Link>
          )}
          <div className="table-table">
            <Table className="lobbyTable" striped bordered hover variant="dark">
              <thead>
                <tr className="tableHeader">
                  <th>ИГРОКИ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {game?.players.map((el) => (
                      <div className="player">
                        <h3 className="playerFont">{el.player.username}</h3>
                      </div>
                    ))}
                  </td>
                </tr>
              </tbody>
              <Table className="">
                <tr>
                  <th className="tableHeader">Автор игры:</th>
                  <td className="playerFont">{game?.author.username}</td>
                </tr>
                <tr>
                  <th className="tableHeader">Время начала игры:</th>
                  <td className="playerFont">{game?.startDate}</td>
                </tr>
              </Table>
            </Table>
          </div>
          <Link to="/home">
            <Button
              onClick={() => {
                dispatch(quitGame(game._id));
              }}
            >
              Выйти из игры
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Lobby;
