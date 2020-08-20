import { setProfile, sendError } from '../actionCreators.js';

export default function getProfile(id) {
  return async (dispatch) => {
    try {
      const response = await fetch(`/api/user/${id}`, {
        method: 'GET',
      });
      const data = await response.json();
      console.log('>>>>' + data);
      dispatch(setProfile(data));
    } catch (err) {
      dispatch(sendError(err.message));
    }
  };
}
