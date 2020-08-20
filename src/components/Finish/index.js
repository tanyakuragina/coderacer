import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';

export default function () {
  const game = useSelector((state) => state.game);

  if (!game) return <h1>NO GAME FOUND</h1>;

  return (
    <>
      <Table striped bordered hover>
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
