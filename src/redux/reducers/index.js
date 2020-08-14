import * as actionTypes from '../actionTypes.js';

const inititalState = {
  isAuthenticated: false,
  error: '',
};

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case actionTypes.authenticatedSuccessfully:
      return {
        ...state,
        isAuthenticated: true,
      };
    case actionTypes.logout:
      return {
        ...state,
        isAuthenticated: false,
      };

    case actionTypes.sendError:
      return {
        ...state,
        error: action.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
