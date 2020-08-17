import { setOneGame, sendError } from '../actionCreators.js';

export default function getGames() {
  return async (dispatch) => {
    try {
      const response = await fetch(`/api/game/${id}`, {
        method: 'GET',
      });
      const data = await response.json();
      console.log(data);
      dispatch(setOneGame(data));
    } catch (err) {
      dispatch(sendError(err.message));
    }
  };
}
