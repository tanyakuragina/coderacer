import * as actionTypes from './actionTypes.js';

export function authenticatedSuccessfully(id) {
  return { type: actionTypes.authenticatedSuccessfully, userId: id };
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
  return { type: actionTypes.setChallenge, challenge: data };
}

export function setGame(data) {
  return { type: actionTypes.setGame, game: data };
}

export function setOneGame(data) {
  return { type: actionTypes.setOneGame, game: data };
}

export function setGameList(data) {
  return { type: actionTypes.setGameList, games: data };
}

export function setProfile(data) {
  return { type: actionTypes.setProfile, user: data };
}

export function dropGame() {
  return { type: actionTypes.dropGame };
}
