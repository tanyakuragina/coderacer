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
        const user = await response.json();
        console.log(user);
        console.log('>>>>11' + user.username)
        dispatch(authenticatedSuccessfully(user._id, user.username));
      }
    } catch (err) {
      dispatch(sendError(err.message));
    }
  };
}
