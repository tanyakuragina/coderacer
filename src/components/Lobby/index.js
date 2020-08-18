import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getOneGame from '../../redux/thunks/getOneGame';
import { useParams } from 'react-router-dom';

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
      <div>OK</div>
      <div>{game?.author}</div>
      <div>{game?.startDate}</div>
      {game?.players.map((el) => (
        <div>{el.player.username}</div>
      ))}
    </>
  );
}

export default Lobby;
