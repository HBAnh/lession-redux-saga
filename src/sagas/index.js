import {
  fork,
  take,
  call,
  put,
  delay,
  takeLatest,
  select,
  takeEvery,
} from "redux-saga/effects";
import * as taskTypes from "../constants/task";
import { getListTask } from "../apis/task";
import { STATUS_CODE } from "../constants/index";
import {
  fetchListTaskFailed,
  fetchListTaskSuccess,
  filterTaskSuccess,
} from "../actions/task";
import { showLoading, hideLoading } from "../actions/ui";

/*
    B1: thực thi các action fetch task 
    B2.1: hiện thị thanh loading
    B2.2: gọi api
    B3: kiểm tra STATUS_CODE
      nếu thành công ...
      nếu thất bại....
    B3.1: tắt thanh loading
    B4: Thực thi các công việc tiếp theo
*/

function* watchFetchListTaskAction() {
  //vòng lập vô tận
  while (true) {
    try {
      yield take(taskTypes.FETCH_TASK); //thực thi action fetchtask
      yield put(showLoading()); // hiển thị loading
      const res = yield call(getListTask); // gọi API
      const { status, data } = res;
      if (status === STATUS_CODE.SUCCESS) {
        // kiểm tra status của STATUS_CODE
        yield put(fetchListTaskSuccess(data));
      } else {
        yield put(fetchListTaskFailed(data));
      }
      yield delay(1000);
      yield put(hideLoading()); // ẩn loading
    } catch (err) {
      console.log(err);
    }
  }
}

//trim(): bỏ các khoản trống
//toLowerCase(): chuyển thành ký tự thường
//abcde.includes(abc): kiểm tra 1 chuỗi còn nằm trong chuỗi
function* filterTaskSaga({ payload }) {
  yield delay(800);
  const { keyword } = payload;
  const list = yield select((state) => state.task.listTask);
  const dataFilter = list.filter((task) =>
    task.title.trim().toLowerCase().includes(keyword.trim().toLowerCase())
  );
  yield put(filterTaskSuccess(dataFilter));
}

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
  yield takeEvery(taskTypes.FILTER_TASK, filterTaskSaga);
}
export default rootSaga;
