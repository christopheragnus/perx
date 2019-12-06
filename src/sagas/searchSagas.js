import { put, takeLatest } from "redux-saga/effects";

export function* fetchData(action) {
  //console.log(action.payload);
  const data = yield fetch(
    `https://www.omdbapi.com/?s=${action.payload}&apikey=31de2cd7`
  );
  const res = yield data.json();
  try {
    yield put({
      type: "SEARCH_MOVIES_SUCCESS",
      payload: res.Search
    });
  } catch (e) {
    yield put({
      type: "SEARCH_MOVIES_FAILURE",
      error: res.Error
    });
  }
}

export function* watchFetchData() {
  yield takeLatest("SEARCH_MOVIES_REQUEST", fetchData);
}
