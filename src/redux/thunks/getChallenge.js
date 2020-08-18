import { setChallenge, sendError } from '../actionCreators.js';

export default function getChallenge(id) {
  return async (dispatch) => {
    try {
      const response = await fetch(`/api/challenges/${id}`, {
        method: 'GET',
      });
      const data = await response.json();
      console.log('CHALLENGE:', data);
      dispatch(setChallenge(data));
    } catch (err) {
      dispatch(sendError(err.message));
    }
  };
}
