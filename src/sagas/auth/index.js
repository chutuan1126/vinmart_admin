import { takeLatest } from "redux-saga/effects";
import { AuthTypes } from 'redux/AuthRedux';
import { signInWithEmailAndPassword, createAccountWithEmailAndPassword } from "./AuthSaga";

// Invoice
export function* authWatcher() {
  yield takeLatest(AuthTypes.SIGN_IN_WITH_EMAIL_AND_PASSWORD_REQUEST, signInWithEmailAndPassword);
  yield takeLatest(AuthTypes.CREATE_ACCOUNT_WITH_EMAIL_AND_PASSWORD_REQUEST, createAccountWithEmailAndPassword);
}