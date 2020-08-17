import * as actionTypes from '../actionTypes.js';

const inititalState = {
  isAuthenticated: false,
  error: '',
  challenges: [],
  challenge: null,
  game: null,
};

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case actionTypes.setChallenge:
      return {
        ...state,
        challenge: action.challenge,
      };

    case actionTypes.setGame:
      return {
        ...state,
        game: action.game,
      };

    case actionTypes.quitGame:
      return {
        ...state,
        challenge: null,
        game: null,
      };

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

    case actionTypes.setChallenges:
      return {
        ...state,
        challenges: action.challenges,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
