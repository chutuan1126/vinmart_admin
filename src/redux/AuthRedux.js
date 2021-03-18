import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- START: Initial State ------------- */
export const INITIAL_STATE = Immutable({
  fetching: {},
  contents: {},
  error: {},
});
/* ------------- END: Initial State ------------- */

/* ------------- START: Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  signInWithEmailAndPasswordRequest: ['classify', 'params'],
  signInWithEmailAndPasswordSuccess: ['classify', 'payload'],
  signInWithEmailAndPasswordFailure: ['classify', 'error'],
  
  createAccountWithEmailAndPasswordRequest: ['classify', 'params'],
  createAccountWithEmailAndPasswordSuccess: ['classify', 'payload'],
  createAccountWithEmailAndPasswordFailure: ['classify', 'error'],
});

export const AuthTypes = Types;
export default Creators;
/* ------------- END: Types and Action Creators ------------- */

/* ------------- START: signInWithEmailAndPassword ------------- */
export const signInWithEmailAndPasswordRequest = (state, { classify }) => {
  return state.merge({
    fetching: { ...state.fetching, [classify]: true },
    contents: { ...state.contents, [classify]: null },
    error: { ...state.error, [classify]: null },
  });
};

export const signInWithEmailAndPasswordSuccess = (state, { classify, payload }) => {
  const { email, uid } = payload;
  return state.merge({
    fetching: { ...state.fetching, [classify]: false },
    contents: { ...state.contents, [classify]: { email, uid } },
    error: { ...state.error, [classify]: null },
  });
};

export const signInWithEmailAndPasswordFailure = (state, { classify, error }) => {
  return state.merge({
    fetching: { ...state.fetching, [classify]: false },
    contents: { ...state.contents, [classify]: null },
    error: { ...state.error, [classify]: error },
  });
};
/* ------------- END: signInWithEmailAndPassword ------------- */

/* ------------- START: signInWithEmailAndPassword ------------- */
export const createAccountWithEmailAndPasswordRequest = (state, { classify }) => {
  return state.merge({
    fetching: { ...state.fetching, [classify]: true },
    contents: { ...state.contents, [classify]: null },
    error: { ...state.error, [classify]: null },
  });
};

export const createAccountWithEmailAndPasswordSuccess = (state, { classify, payload }) => {
  const { email, uid } = payload;
  return state.merge({
    fetching: { ...state.fetching, [classify]: false },
    contents: { ...state.contents, [classify]: { email, uid } },
    error: { ...state.error, [classify]: null },
  });
};

export const createAccountWithEmailAndPasswordFailure = (state, { classify, error }) => {
  return state.merge({
    fetching: { ...state.fetching, [classify]: false },
    contents: { ...state.contents, [classify]: null },
    error: { ...state.error, [classify]: error },
  });
};
/* ------------- END: signInWithEmailAndPassword ------------- */

/* ------------- START: Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_WITH_EMAIL_AND_PASSWORD_REQUEST]: signInWithEmailAndPasswordRequest,
  [Types.SIGN_IN_WITH_EMAIL_AND_PASSWORD_SUCCESS]: signInWithEmailAndPasswordSuccess,
  [Types.SIGN_IN_WITH_EMAIL_AND_PASSWORD_FAILURE]: signInWithEmailAndPasswordFailure,
  [Types.CREATE_ACCOUNT_WITH_EMAIL_AND_PASSWORD_REQUEST]: createAccountWithEmailAndPasswordRequest,
  [Types.CREATE_ACCOUNT_WITH_EMAIL_AND_PASSWORD_SUCCESS]: createAccountWithEmailAndPasswordSuccess,
  [Types.CREATE_ACCOUNT_WITH_EMAIL_AND_PASSWORD_FAILURE]: createAccountWithEmailAndPasswordFailure,
});
/* ------------- END: Hookup Reducers To Types ------------- */