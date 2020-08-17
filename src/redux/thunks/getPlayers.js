// import { setPlayers, sendError } from "../actionCreators.js";

// export default function getPlayers(id) {
//   return async (dispatch) => {
//     try {
//       const response = await fetch(`api/game/user/${id}`, {
//         method: 'GET',
//       });
//       const data = await response.json();
//       dispatch(setPlayers(data));
//     } catch (err) {
//       dispatch(sendError(err.message));
//     }
//   };
// }
