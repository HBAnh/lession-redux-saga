import { fork, take, call, put } from "redux-saga/effects";
import * as taskTypes from "../constants/task";
import { getListTask } from "../apis/task";
import { STATUS_CODE } from "../constants/index";
import { fetchListTaskFailed, fetchListTaskSuccess } from "../actions/task";

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield fork(watchCreateTaskAction);
}

function* watchFetchListTaskAction() {
  while (true) {
    yield take(taskTypes.FETCH_TASK);
    const res = yield call(getListTask);
    const { status, data } = res;
    if (status === STATUS_CODE.SUCCESS) {
      //dispath action fetchTaskSuccess
      yield put(fetchListTaskSuccess(data));
    } else {
      //dispath action fetchTaskFailed
      yield put(fetchListTaskFailed(data));
    }
  }
}

function* watchCreateTaskAction() {
  yield true;
}
export default rootSaga;
