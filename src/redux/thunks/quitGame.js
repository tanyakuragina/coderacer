import { quitGame, sendError } from '../actionCreators.js';

export default function quitGame(gameId) {
  return async (dispatch) => {
    try {
      const response = await fetch(`/api/game/quit/${gameId}`, {
        method: 'POST',
      });
      const result = await response.json();
      dispatch(quitGame())
    } catch (err) {
      dispatch(sendError(err.message));
    }
  };
}
