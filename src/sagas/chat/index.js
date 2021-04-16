import { takeLatest } from "redux-saga/effects";
import { ChatTypes } from 'redux/ChatRedux';
import { getListConversation } from './ChatSaga';

// Chat
export function* chatWatcher() {
  yield takeLatest(ChatTypes.GET_LIST_CONVERSATION_REQUEST, getListConversation);
}