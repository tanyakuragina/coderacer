import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getOneGame from '../../redux/thunks/getOneGame'

function Lobby() {
  const game = useSelector((state) => state.game);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneGame());
  }, []);

  return (
    <>
      <div>OK</div>
      <div>{game.author}</div>
    </>
  );
}

export default Lobby;
