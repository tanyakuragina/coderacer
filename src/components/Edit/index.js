import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import getNewName from '../../redux/thunks/getNewName';
import { updateInput } from '../../redux/actionCreators';

function Edit() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.username);
  const usernameInput = useSelector((state) => state.usernameInput);
  const userId = useSelector((state) => state.userId);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(getNewName(userId, usernameInput));
  }

  function handleChange({ target: { value } }) {
    dispatch(updateInput(value));
  }

  return (
    <>
      <div className="formform m-3">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            name="username"
            value={usernameInput}
          />
          <button>Изменить имя</button>
        </form>
      </div>
    </>
  );
}

export default Edit;
