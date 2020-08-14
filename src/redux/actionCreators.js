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
