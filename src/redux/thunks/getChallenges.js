import { setChallenges, sendError } from '../actionCreators.js';

export default function login(email, password) {
  return async (dispatch) => {
    try {
      const response = await fetch('/api/challenges', {
        method: 'GET',
      });
      const data = await response.json();
      dispatch(setChallenges(data));
      console.log(data);
    } catch (err) {
      sendError(err.message);
    }
  };
}
