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
  loadingActionRequest: ['classify'],
  loadingActionSuccess: ['classify', 'payload'],
  loadingActionFailure: ['classify', 'error'],

  signInWithEmailAndPasswordRequest: ['classify', 'params'],
  signInWithEmailAndPasswordSuccess: ['classify', 'payload'],
  signInWithEmailAndPasswordFailure: ['classify', 'error'],
  
  createAccountWithEmailAndPasswordRequest: ['classify', 'params'],
  createAccountWithEmailAndPasswordSuccess: ['classify', 'payload'],
  createAccountWithEmailAndPasswordFailure: ['classify', 'error'],

  signOutFirebaseRequest: ['classify'],
  signOutFirebaseSuccess: ['classify', 'payload'],
  signOutFirebaseFailure: ['classify', 'error'],
});

export const AuthTypes = Types;
export default Creators;
/* ------------- END: Types and Action Creators ------------- */

/* ------------- START: loadingAction ------------- */
export const loadingActionRequest = (state, { classify }) => {
  return state.merge({
    fetching: { ...state.fetching, [classify]: true },
    contents: { ...state.contents, [classify]: false },
    error: { ...state.error, [classify]: null },
  });
};

export const loadingActionSuccess = (state, { classify, payload }) => {
  return state.merge({
    fetching: { ...state.fetching, [classify]: false },
    contents: { ...state.contents, [classify]: payload },
    error: { ...state.error, [classify]: null },
  });
};

export const loadingActionFailure = (state, { classify, error }) => {
  return state.merge({
    fetching: { ...state.fetching, [classify]: false },
    contents: { ...state.contents, [classify]: false },
    error: { ...state.error, [classify]: error },
  });
};
/* ------------- END: loadingAction ------------- */

/* ------------- START: signInWithEmailAndPassword ------------- */
export const signInWithEmailAndPasswordRequest = (state, { classify }) => {
  return state.merge({
    fetching: { ...state.fetching, [classify]: true },
    contents: { ...state.contents, [classify]: null },
    error: { ...state.error, [classify]: null },
  });
};

export const signInWithEmailAndPasswordSuccess = (state, { classify, payload }) => {
  const { email, uid, displayName, photoURL } = payload;
  return state.merge({
    fetching: { ...state.fetching, [classify]: false },
    contents: { ...state.contents, [classify]: { email, uid, displayName, photoURL }, token: true },
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

/* ------------- START: createAccountWithEmailAndPassword ------------- */
export const createAccountWithEmailAndPasswordRequest = (state, { classify }) => {
  return state.merge({
    fetching: { ...state.fetching, [classify]: true },
    contents: { ...state.contents, [classify]: null },
    error: { ...state.error, [classify]: null },
  });
};

export const createAccountWithEmailAndPasswordSuccess = (state, { classify, payload }) => {
  const { email, uid, displayName, photoURL } = payload;
  return state.merge({
    fetching: { ...state.fetching, [classify]: false },
    contents: { ...state.contents, [classify]: { email, uid, displayName, photoURL }, token: true },
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
/* ------------- END: createAccountWithEmailAndPassword ------------- */

/* ------------- START: signOutFirebase ------------- */
export const signOutFirebaseRequest = (state, { classify }) => {
  return state.merge({
    fetching: { ...state.fetching, [classify]: true },
    contents: { ...state.contents, [classify]: null },
    error: { ...state.error, [classify]: null },
  });
};

export const signOutFirebaseSuccess = (state, { classify }) => {
  return state.merge({
    fetching: { ...state.fetching, [classify]: false },
    contents: { ...state.contents, [classify]: null, token: false },
    error: { ...state.error, [classify]: null },
  });
};

export const signOutFirebaseFailure = (state, { classify, error }) => {
  return state.merge({
    fetching: { ...state.fetching, [classify]: false },
    contents: { ...state.contents, [classify]: state.contents[classify] },
    error: { ...state.error, [classify]: error },
  });
};
/* ------------- END: signOutFirebase ------------- */

/* ------------- START: Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOADING_ACTION_REQUEST]: loadingActionRequest,
  [Types.LOADING_ACTION_SUCCESS]: loadingActionSuccess,
  [Types.LOADING_ACTION_FAILURE]: loadingActionFailure,
  [Types.SIGN_IN_WITH_EMAIL_AND_PASSWORD_REQUEST]: signInWithEmailAndPasswordRequest,
  [Types.SIGN_IN_WITH_EMAIL_AND_PASSWORD_SUCCESS]: signInWithEmailAndPasswordSuccess,
  [Types.SIGN_IN_WITH_EMAIL_AND_PASSWORD_FAILURE]: signInWithEmailAndPasswordFailure,
  [Types.CREATE_ACCOUNT_WITH_EMAIL_AND_PASSWORD_REQUEST]: createAccountWithEmailAndPasswordRequest,
  [Types.CREATE_ACCOUNT_WITH_EMAIL_AND_PASSWORD_SUCCESS]: createAccountWithEmailAndPasswordSuccess,
  [Types.CREATE_ACCOUNT_WITH_EMAIL_AND_PASSWORD_FAILURE]: createAccountWithEmailAndPasswordFailure,
  [Types.SIGN_OUT_FIREBASE_REQUEST]: signOutFirebaseRequest,
  [Types.SIGN_OUT_FIREBASE_SUCCESS]: signOutFirebaseSuccess,
  [Types.SIGN_OUT_FIREBASE_FAILURE]: signOutFirebaseFailure,
});
/* ------------- END: Hookup Reducers To Types ------------- */