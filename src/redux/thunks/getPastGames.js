import { setPastGames, sendError } from '../actionCreators.js';

export default function getPastGames(id) {
  return async (dispatch) => {
    try {
      const response = await fetch(`/api/games/user/${id}`, {
        method: 'GET',
      });
      const data = await response.json();
      dispatch(setPastGames(data));
    } catch (err) {
      dispatch(sendError(err.message));
    }
  };
}
