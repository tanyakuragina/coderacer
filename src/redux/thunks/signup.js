import { authenticatedSuccessfully, sendError } from '../actionCreators.js';

export default function signup(username, email, password) {
  return async (dispatch) => {
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
      const result = await response.json();
      if (result.isOkay) dispatch(authenticatedSuccessfully());
      console.log(result);
    } catch (err) {
      sendError(err.message);
    }
  };
}
