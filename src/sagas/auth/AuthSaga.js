import { put } from '@redux-saga/core/effects';
import { auth, signOutFirebase, createUserProfileDocument } from '../../firebase';
import AuthActions from 'redux/AuthRedux';

export function* loadingAction({ classify }) {
  try {
    const response = yield  auth.currentUser;
    if (response && response.user) {
      yield put(AuthActions.loadingActionSuccess(classify, true));
    } else {
      yield put(AuthActions.loadingActionFailure(classify, false));
    }
  } catch (error) {
    yield put(AuthActions.loadingActionFailure(classify, false));
  }
}

export function* signInWithEmailAndPassword({ classify, params }) {
  const { email, password } = params;
  try {
    const response = yield auth.signInWithEmailAndPassword(email, password);
    if (response && response.user) {
      yield put(AuthActions.signInWithEmailAndPasswordSuccess(classify, response.user));
    } else {
      yield put(AuthActions.signInWithEmailAndPasswordFailure(classify, response));
    }
  } catch (error) {
    yield put(AuthActions.signInWithEmailAndPasswordFailure(classify, error));
  }
}

export function* createAccountWithEmailAndPassword({ classify, params }) {
  const { firstName, email, password } = params;
  try {
    const response = yield auth.createUserWithEmailAndPassword(email, password);
    if (response && response.user) {
      const user = auth.currentUser;
      if(user) {
        user.updateProfile({ displayName: firstName, photoURL: firstName.charAt(0).toLocaleUpperCase() });
        createUserProfileDocument(response.user, params);
      }
      yield put(AuthActions.createAccountWithEmailAndPasswordSuccess(classify, response.user));
    } else {
      yield put(AuthActions.createAccountWithEmailAndPasswordFailure(classify, response));
    }
  } catch (error) {
    yield put(AuthActions.createAccountWithEmailAndPasswordFailure(classify, error));
  }
}

export function* signOutFirebaseToLogin({ classify }) {
  try {
    const response = yield signOutFirebase();
    if (response) {
      yield put(AuthActions.signOutFirebaseSuccess(classify, response));
    } else {
      yield put(AuthActions.signOutFirebaseFailure(classify, response));
    }
  } catch (error) {
    yield put(AuthActions.signOutFirebaseFailure(classify, error));
  }
}