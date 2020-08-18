import * as actionTypes from '../actionTypes.js';

const inititalState = {
  isAuthenticated: false,
  error: '',
  challenges: [],
  challenge: null,
  game: null,
  games: [],
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

    case actionTypes.setGameList:
      return {
        ...state,
        games: action.games,
      };

    case actionTypes.setOneGame:
      return {
        ...state,
        game: action.game,
      };
    case actionTypes.dropGame:
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
        game: null,
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
      // case actionTypes.setPlayers:
      //   return {
      //     ...state,
      //     players: action.players,
      //   };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
