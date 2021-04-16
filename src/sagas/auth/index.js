import { takeLatest } from "redux-saga/effects";
import { AuthTypes } from 'redux/AuthRedux';
import { ChatTypes } from 'redux/ChatRedux';
import { loadingAction, signInWithEmailAndPassword, createAccountWithEmailAndPassword, signOutFirebaseToLogin } from "./AuthSaga";
import { getListConversation } from '../chat/ChatSaga';

// Auth
export function* authWatcher() {
  yield takeLatest(AuthTypes.LOADING_ACTION_REQUEST, loadingAction);
  yield takeLatest(AuthTypes.SIGN_IN_WITH_EMAIL_AND_PASSWORD_REQUEST, signInWithEmailAndPassword);
  yield takeLatest(AuthTypes.CREATE_ACCOUNT_WITH_EMAIL_AND_PASSWORD_REQUEST, createAccountWithEmailAndPassword);
  yield takeLatest(AuthTypes.SIGN_OUT_FIREBASE_REQUEST, signOutFirebaseToLogin);
}