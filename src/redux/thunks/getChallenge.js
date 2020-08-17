import { setChallenge, sendError } from '../actionCreators.js';

export default function getChallenge(id) {
  return async (dispatch) => {
    try {
      const response = await fetch(`/api/challenge/${id}`, {
        method: 'GET',
      });
      const data = await response.json();
      dispatch(setChallenge(data));
    } catch (err) {
      dispatch(sendError(err.message));
    }
  };
}
