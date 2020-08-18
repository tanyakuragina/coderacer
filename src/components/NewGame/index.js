import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import newGame from '../../redux/thunks/newGame.js';

export default function () {
  const game = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  if (game) return <Redirect to={`/game/${game.id}`} />;

  return (
    <>
      <div className="form-group row">
        <label htmlFor="datetime-local-input" className="col-2 col-form-label">Дата и время</label>
        <div className="col-10">
          <input
            className="form-control"
            type="datetime-local"
            id="datetime-local-input"
            onChange={(e) => { setDate(new Date(e.target.value)); }}
          />
        </div>
      </div>
      <Button onClick={() => { dispatch(newGame(date)); }}>Создать игру</Button>
    </>
  );
}
