import { dropGame, sendError } from '../actionCreators.js';

export default function deleteGame(id) {
  return async (dispatch) => {
    try {
      const response = await fetch(`/api/game/${id}`, {
        method: 'DELETE',
      });
      console.log(response);
      dispatch(dropGame());
    } catch (err) {
      dispatch(sendError(err.message));
    }
  };
}
