import { logout, sendError } from '../actionCreators.js';

export default function logoutRequest() {
  return async (dispatch) => {
    try {
      await dispatch(logout());
      localStorage.clear();
      fetch('/api/logout');
    } catch (err) {
      dispatch(sendError(err.message));
    }
  };
}
