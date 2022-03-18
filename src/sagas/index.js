import {
  call,
  delay,
  fork,
  put,
  take,
  takeEvery,
  takeLatest,
  select,
} from "redux-saga/effects";
import { hideModal } from "../actions/modal";
import {
  updateTaskSuccess,
  updateTaskFailed,
  addTaskFailed,
  addTaskSuccess,
  fetchListTask,
  fetchListTaskFailed,
  fetchListTaskSuccess,
  deleteTaskSuccess,
  deleteTaskFailed,
} from "../actions/task";
import { hideLoading, showLoading } from "../actions/ui";
import {
  addTaskAPI,
  getListTaskAPI,
  updateTaskAPI,
  deleteTaskAPI,
} from "../apis/task";
import { STATUSES, STATUS_CODE } from "../actions/constants/index";
import * as taskTypes from "../actions/constants/task";

/*   
  trim(): bỏ các khoản trống
  toLowerCase(): chuyển thành ký tự thường
  abcde.includes(abc): kiểm tra 1 chuỗi còn nằm trong chuỗi
*/

//Show task
function* watchFetchListTaskAction() {
  //vòng lập vô tận
  while (true) {
    try {
      const action = yield take(taskTypes.FETCH_TASK); //thực thi action fetchtask
      yield put(showLoading()); // hiển thị loading
      const { params } = action.payload;
      const res = yield call(getListTaskAPI, params); // gọi API getListTask
      const { status: statusCode, data } = res; // lây status và data từ response
      if (statusCode === STATUS_CODE.SUCCESS) {
        // kiểm tra status của STATUS_CODE => 200
        yield put(fetchListTaskSuccess(data)); //thực thi fetch task thành công
      } else {
        yield put(fetchListTaskFailed(data)); //thực thi fetch task thất bại
      }
      yield delay(1000); // delay 1s
      yield put(hideLoading()); // ẩn loading
    } catch (error) {
      console.log(error);
    }
  }
}
//Filter task
function* filterTaskSaga({ payload }) {
  try {
    yield delay(800); // delay 0.8s
    const { keyword } = payload; // lấy keyword tu payload trong type action
    yield put(
      fetchListTask({
        q: keyword,
      })
    );
  } catch (error) {
    console.log(error);
  }
}
//Add task
function* addTaskSaga({ payload }) {
  try {
    const { title, decriptions } = payload; //lấy title,decriptions tu payload trong type action
    yield put(showLoading()); // hiển thị loading
    const res = yield call(addTaskAPI, {
      // gọi API addTaskAPI chuyền thêm data gồm
      title, // title
      decriptions, // decriptions
      status: STATUSES[0].value, // và status lấy từ constant có giá trị không để luôn hiển thị ở phần READY
    });
    const { status: statusCode, data } = res; // lấy status và data từ response
    if (statusCode === STATUS_CODE.CREATED) {
      // nếu status từ res = vs STATUS_CODE.CREATE => 201
      yield put(addTaskSuccess(data)); // thực thi action addTaskSuccess đổ data vào
      yield put(hideModal()); // đóng form modal lại
    } else {
      yield put(addTaskFailed(data)); // thực thi acction addTaskFailed đồ data là error vào
    }
    yield delay(800);
    yield put(hideLoading());
  } catch (error) {
    console.log(error);
  }
}
//Update task
function* updateTaskSaga({ payload }) {
  try {
    const { title, decriptions, status } = payload;
    const taskEditing = yield select((state) => state.task.taskEditing);
    yield put(showLoading());
    const res = yield call(
      updateTaskAPI,
      { title, decriptions, status },
      taskEditing.id
    );
    const { status: statusCode, data } = res; // lấy status và data từ response
    if (statusCode === STATUS_CODE.SUCCESS) {
      // nếu status từ res = vs STATUS_CODE.SUCCESS => 200
      yield put(updateTaskSuccess(data)); // thực thi action updateTaskSuccess đổ data vào
      yield put(hideModal()); // đóng form modal lại
    } else {
      yield put(updateTaskFailed(data)); // thực thi acction updateTaskFailed đồ data là error vào
    }
    yield delay(1000);
    yield put(hideLoading());
  } catch (error) {
    console.log(error);
  }
}

//delete task
function* deleteTaskSaga({ payload }) {
  try {
    const { id } = payload; // get id trong payload tu action deleteTask
    yield put(showLoading());
    const res = yield call(deleteTaskAPI, id);
    const { status: statusCode } = res; // lấy status và data từ response
    if (statusCode === STATUS_CODE.SUCCESS) {
      // nếu status từ res = vs STATUS_CODE.SUCCESS => 200
      yield put(deleteTaskSuccess(id)); // thực thi action deleteTaskSuccess đổ data vào
      yield put(hideModal()); // đóng form modal lại
    } else {
      yield put(deleteTaskFailed(id)); // thực thi acction deleteTaskFailed đồ data là error vào
    }
    yield delay(1000);
    yield put(hideLoading());
  } catch (error) {
    console.log(error);
  }
}
//root
function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
  yield takeEvery(taskTypes.ADD_TASK, addTaskSaga);
  yield takeLatest(taskTypes.UPDATE_TASK, updateTaskSaga);
  yield takeLatest(taskTypes.DELETE_TASK, deleteTaskSaga);
}
export default rootSaga;
