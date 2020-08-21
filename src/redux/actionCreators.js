import * as actionTypes from './actionTypes.js';

export function authenticatedSuccessfully(id, username) {
  return { type: actionTypes.authenticatedSuccessfully, userId: id, username };
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

export function setNewName(data) {
  return { type: actionTypes.setNewName, username: data };
}

export function updateInput(name) {
  return { type: actionTypes.setUpdateInput, usernameInput: name };
}

export function setPastGames(games) {
  return {
    type: actionTypes.setPastGames,
    pastGames: games,
  };
}
