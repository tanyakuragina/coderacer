import { setChallenges, sendError } from '../actionCreators.js';

export default function getChallenges() {
  return async (dispatch) => {
    try {
      const response = await fetch('/api/challenges', {
        method: 'GET',
      });
      const data = await response.json();
      dispatch(setChallenges(data));
    } catch (err) {
      dispatch(sendError(err.message));
    }
  };
}
