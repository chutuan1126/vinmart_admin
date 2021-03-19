import { call, put } from '@redux-saga/core/effects';
import { auth, signOutFirebase, createUserProfileDocument, handleonAuthStateChanged } from '../../firebase';
import AuthActions from 'redux/AuthRedux';

export function* loadingAction({ classify }) {
  try {
    const response = yield call(handleonAuthStateChanged);
    if (response) {
      const token = yield auth.currentUser.getIdToken(true);
      localStorage.setItem('token', token);
      yield put(AuthActions.loadingActionSuccess(classify, response));
    } else {
      yield put(AuthActions.loadingActionFailure(classify, response));
    }
  } catch (error) {
    yield put(AuthActions.loadingActionFailure(classify, error));
  }
}

export function* signInWithEmailAndPassword({ classify, params }) {
  const { email, password } = params;
  try {
    const response = yield auth.signInWithEmailAndPassword(email, password);
    if (response && response.user) {
      const token = yield auth.currentUser.getIdToken(true);
      localStorage.setItem('token', token);
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
      if (user) {
        const token = yield user.getIdToken(true);
        localStorage.setItem('token', token);
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
      localStorage.removeItem('token');
      yield put(AuthActions.signOutFirebaseSuccess(classify, response));
    } else {
      yield put(AuthActions.signOutFirebaseFailure(classify, response));
    }
  } catch (error) {
    yield put(AuthActions.signOutFirebaseFailure(classify, error));
  }
}