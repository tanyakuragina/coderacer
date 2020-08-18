import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getOneGame from '../../redux/thunks/getOneGame';
import { useParams, Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import Timer, { initialTime } from 'react-compound-timer';
import '../Lobby/lobby.css';

function Lobby() {
  const game = useSelector((state) => state.game);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isGameStarted, setIsGameStarted] = useState(false);

  useEffect(() => {
    dispatch(getOneGame(id));
  }, [id]);

  // useEffect(() => {
  //   if (time > 10000) {
  //     setTimeout(() => {
  //     setTime(time - 1000)
  //     }, 1000)
  //   }
  // },[time])

  console.log(game);

  return (
    <>
      <div className="lobby">
        <div className="lobby_shadow">
          <h1>Игра скоро начнется</h1>
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
              <h4>
                До начала игры осталось:
                <Timer.Hours /> ч.
                <Timer.Minutes /> мин.
                <Timer.Seconds /> сек.
              </h4>
            </Timer>
          )}
          {isGameStarted && (
            <Link to="/game" >
            <button>Начать игру</button>
            </Link>
          )}
          <Table className="w-25" striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Автор игры</th>
                <th>Время начала игры</th>
                <th>Игроки</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{game?.author.username}</td>
                <td>{game?.startDate}</td>
                <td>
                  {game?.players.map((el) => (
                    <div>{el.player.username}</div>
                  ))}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default Lobby;
