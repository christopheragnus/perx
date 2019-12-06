import { all } from "redux-saga/effects";
import { watchFetchData } from "./searchSagas";

export default function* rootSaga() {
  yield all([watchFetchData()]);
}
