import { authenticatedSuccessfully, sendError } from '../actionCreators.js';

export default function joinGame(gameId) {
  return async (dispatch) => {
    try {
      const response = await fetch(`/api/game/join/${gameId}`, {
        method: 'POST',
      });
      const result = await response.json();
      console.log(result);
    } catch (err) {
      sendError(err.message);
    }
  };
}
