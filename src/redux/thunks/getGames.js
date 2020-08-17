import { setGameList, sendError } from '../actionCreators.js';

export default function getGames() {
  return async (dispatch) => {
    try {
      const response = await fetch('/api/game/gameList', {
        method: 'GET',
      });
      const data = await response.json();
      console.log(data);
      dispatch(setGameList(data));
    } catch (err) {
      dispatch(sendError(err.message));
    }
  };
}
