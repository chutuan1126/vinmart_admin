import { call, put } from '@redux-saga/core/effects';
import { doRequestWithoutToken } from 'utils/ApiUtils';
import ChatActions from 'redux/ChatRedux';

export function* getListConversation({ classify, params }) {
  const url = `https://randomuser.me/api/?results=${params.offset}`;
  try {
    const response = yield doRequestWithoutToken({ method: 'GET', url });
    if (response && response.status === 200) {
      yield put(ChatActions.getListConversationSuccess(classify, response.data));
    } else {
      yield put(ChatActions.getListConversationFailure(classify, response));
    }
  } catch (error) {
    yield put(ChatActions.getListConversationFailure(classify, error));
  }
}