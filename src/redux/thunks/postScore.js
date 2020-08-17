import { setGame, sendError } from '../actionCreators.js';

export default function postScore(gameId) {
  return async (dispatch) => {
    try {
      const response = await fetch(`/api/game/postScore/${gameId}`, {
        method: 'POST',
      });
      const result = await response.json();
      dispatch(setGame(result));
    } catch (err) {
      dispatch(sendError(err.message));
    }
  };
}
