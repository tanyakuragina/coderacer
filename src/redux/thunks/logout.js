import { logout, sendError } from '../actionCreators.js';

export default function logoutRequest() {
  return async (dispatch) => {
    try {
      await fetch('/api/logout');
      dispatch(logout());
    } catch (err) {
      dispatch(sendError(err.message));
    }
  };
}
