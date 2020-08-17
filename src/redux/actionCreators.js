import * as actionTypes from './actionTypes.js';

export function authenticatedSuccessfully() {
  return { type: actionTypes.authenticatedSuccessfully };
}

export function logout() {
  return { type: actionTypes.logout };
}

export function sendError(error) {
  return { type: actionTypes.sendError, error };
}

export function setChallenges(data) {
  return { type: actionTypes.setChallenges, challenges: data };
}

export function setChallenge(data) {
  return { type: actionTypes.setChallenges, challenge: data };
}

export function setGame(data) {
  return { type: actionTypes.setGame, game: data };
}

export function setGameList(data) {
  return {type: actionTypes.setGameList, games: data}
}

export function dropGame() {
  return { type: actionTypes.dropGame };
}
