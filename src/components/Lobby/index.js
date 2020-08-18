import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getOneGame from '../../redux/thunks/getOneGame';
import { useParams } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import '../Lobby/lobby.css';

function Lobby() {
  const game = useSelector((state) => state.game);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneGame(id));
  }, [id]);

  console.log(game);

  return (
    <>
      <div className="lobby">
        <div className="lobby_shadow">
          <h1>Игра скоро начнется</h1>
          <p>здесь должен быть таймер</p>
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
