import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getOneGame from '../../redux/thunks/getOneGame';
import { useParams } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import Timer, { initialTime } from 'react-compound-timer';
import '../Lobby/lobby.css';

function Lobby() {
  const game = useSelector((state) => state.game);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [time, setTime] = useState(10000);

  useEffect(() => {
    dispatch(getOneGame(id));
  }, [id]);

  console.log(game);

  return (
    <>
      <div className="lobby_start">
        <div className="lobby">
          <div className="lobby_container">
            <h1>Игра скоро начнется</h1>
            {time !== 0 ? (
              <Timer initialTime={time} direction="backward">
                <h4>
                  До начала игры осталось: <Timer.Minutes /> мин.
                  <Timer.Seconds /> сек.
                </h4>
              </Timer>
            ) : (
              <button>Начать игру</button>
            )}
            <Table className="lobbyTable w-25" striped bordered hover variant="dark">
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
      </div>
    </>
  );
}

export default Lobby;
