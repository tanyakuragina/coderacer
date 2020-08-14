import { authenticatedSuccessfully, sendError } from '../actionCreators.js';

export default function login(email, password) {
  return async (dispatch) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (response.status === 200) {
        dispatch(authenticatedSuccessfully());
      }
    } catch (err) {
      sendError(err.message);
    }
  };
}
