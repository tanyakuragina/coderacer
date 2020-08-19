import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import newGame from '../../redux/thunks/newGame.js';
import './newgame.css';

export default function () {
  const game = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  if (game) return <Redirect to={`/game/${game._id}`} />;

  return (
    <>
      <div className="newgame">
        <div className="newgame-shadow">
          <div className="mainContainer">
            <h2 className="d-flex justify-content-center">
              Укажи время начала игры
            </h2>
            <div className="gameCenter d-flex justify-content-center">
              <div className="containerGame d-flex justify-content-center">
                {/* <h5 className="d-flex justify-content-center align-content-center">Дата и время</h5> */}
                <div>
                  <div className="form-group row">
                    <label
                      htmlFor="datetime-local-input"
                      className="dateAndTime col-2 col-form-label"
                    >
                      Дата и время
                    </label>
                    <div className="col">
                      <input
                        className="form-control-game text-light"
                        type="datetime-local"
                        id="datetime-local-input"
                        onChange={(e) => {
                          setDate(new Date(e.target.value));
                        }}
                      />
                    </div>
                  </div>
                  <div className="createGameButton">
                    <Button
                      onClick={() => {
                        dispatch(newGame(date));
                      }}
                    >
                      Создать игру
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
