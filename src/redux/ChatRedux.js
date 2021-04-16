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
  getListConversationRequest: ['classify', 'params'],
  getListConversationSuccess: ['classify', 'payload'],
  getListConversationFailure: ['classify', 'error'],
});

export const ChatTypes = Types;
export default Creators;
/* ------------- END: Types and Action Creators ------------- */

/* ------------- START: loadingAction ------------- */
export const getListConversationRequest = (state, { classify }) => {
  return state.merge({
    fetching: { ...state.fetching, [classify]: true },
    contents: { ...state.contents, [classify]: [] },
    error: { ...state.error, [classify]: null },
  });
};

export const getListConversationSuccess = (state, { classify, payload }) => {
  const contents = [];
  if (Array.isArray(payload.results)) {
    payload.results.map(item => {
      const { login, picture, name } = item;
      contents.push({
        uuid: login.uuid,
        photo: picture.large,
        name: `${name.first} ${name.last}`,
        text: 'Hello world! This is a long message that needs to be truncated.'
      });
    })
  }
  return state.merge({
    fetching: { ...state.fetching, [classify]: false },
    contents: { ...state.contents, [classify]: contents },
    error: { ...state.error, [classify]: null },
  });
};

export const getListConversationFailure = (state, { classify, error }) => {
  return state.merge({
    fetching: { ...state.fetching, [classify]: false },
    contents: { ...state.contents, [classify]: [] },
    error: { ...state.error, [classify]: error },
  });
};
/* ------------- END: loadingAction ------------- */

/* ------------- START: Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_LIST_CONVERSATION_REQUEST]: getListConversationRequest,
  [Types.GET_LIST_CONVERSATION_SUCCESS]: getListConversationSuccess,
  [Types.GET_LIST_CONVERSATION_FAILURE]: getListConversationFailure,
});
/* ------------- END: Hookup Reducers To Types ------------- */