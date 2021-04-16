import { all } from "redux-saga/effects";

import { authWatcher } from "./auth";
import { chatWatcher } from "./chat";

export default function* rootSaga() {
  yield all([
    authWatcher(),
    chatWatcher(),
  ])
};