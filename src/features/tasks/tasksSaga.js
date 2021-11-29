import { call, takeEvery, put, delay } from "redux-saga/effects"
import { getExampleTasks } from "./getExampleTasks"
import { fetchExampleTasks, fetchExampleTasksFailure, fetchExampleTasksSuccess } from "./tasksSlice"

function* fetchExampleTasksHandler() {
  try {
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(fetchExampleTasksSuccess(exampleTasks));
  } catch {
    yield put(fetchExampleTasksFailure())
    yield call(alert, "Ups, coś poszło nie tak! 😲");
  }
};

export function* watchFetchExampleTasks() {
  yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler)
}