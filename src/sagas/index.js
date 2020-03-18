import { all } from "redux-saga/effects";
import { actionWatcher } from "./user.sagas";

export function* usersSaga() {
   yield all([
       actionWatcher()
   ]);
}

export default usersSaga;