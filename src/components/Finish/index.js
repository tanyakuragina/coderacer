import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import getOneGame from '../../redux/thunks/getOneGame';
import useInterval from '../../hooks/useInterval';

export default function () {
  const { id } = useParams();
  const game = useSelector((state) => state.game);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneGame(id));
  }, []);

  useInterval(() => {
    if (game && new Date(game.startDate).getTime() + (1000 * 60 * 30) < Date.now()) {
      dispatch(getOneGame(id));
    }
  }, 5000);
  if (!game) return <h1>LOADING...</h1>;

  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Место</th>
            <th>Игрок</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>10</th>
          </tr>
        </thead>
        <tbody>
          {game.players.map((player, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{player.player.username}</td>
              {player.challengeTimes.map((time, i) => {
                if (i === 0) {
                  return <td>{Math.floor((new Date(time).getTime() - new Date(game.startDate).getTime()) / 1000)}</td>;
                }
                return <td>{Math.floor((new Date(time).getTime() - new Date(player.challengeTimes[i - 1]).getTime()) / 1000)}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
