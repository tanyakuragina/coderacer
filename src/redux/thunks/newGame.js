import { authenticatedSuccessfully, sendError, setGame } from '../actionCreators.js';

export default function newGame(date) {
  return async (dispatch) => {
    try {
      const response = await fetch('/api/game/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date,
        }),
      });
      const result = await response.json();
      dispatch(setGame(result));
    } catch (err) {
      dispatch(sendError(err.message));
    }
  };
}
