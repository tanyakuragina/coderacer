import { setNewName, sendError } from '../actionCreators.js';

export default function getNewName(id, username) {
  return async (dispatch) => {
   console.log('thunk in')
   console.log('username: ', username)

    try {
      const response = await fetch(`/api/username/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      });
      const data = await response.json();
      console.log(data)
      dispatch(setNewName(data.username));
    } catch (err) {
      console.log('thunk error', err)
      dispatch(sendError(err.message));
    }
  };
}
