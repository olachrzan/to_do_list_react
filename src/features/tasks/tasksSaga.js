import { nanoid } from "@reduxjs/toolkit";
import { delay, call, put, select, takeEvery } from "redux-saga/effects"
import { getExampleTasks } from "./getExampleTasks"
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import {
  fetchExampleTasks,
  fetchExampleTasksFailure,
  fetchExampleTasksSuccess,
  selectTasks
} from "./tasksSlice"

function* fetchExampleTasksHandler() {
  try {
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    const exampleTasksWithIds = exampleTasks.map(exampleTask => ({
      ...exampleTask,
      id: nanoid(),
    }));
    yield put(fetchExampleTasksSuccess(exampleTasksWithIds));
  } catch {
    yield put(fetchExampleTasksFailure())
    yield call(alert, "Ups, coś poszło nie tak! 😲");
  }
};

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
  yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}