import { logout, sendError } from '../actionCreators.js';

export default function logoutRequest() {
  return async (dispatch) => {
    try {
      dispatch(logout());
      fetch('/api/logout');
    } catch (err) {
      dispatch(sendError(err.message));
    }
  };
}
