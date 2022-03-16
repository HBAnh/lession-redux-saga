// import * as taskApis from "./../apis/task";
import * as taskConstants from "../constants/task";

//b2: reset: state cua tasks
export const fetchListTask = () => {
  return {
    type: taskConstants.FETCH_TASK,
  };
};
//b3: fetchTaskSuccess vao cai data response
export const fetchListTaskSuccess = (data) => {
  return {
    type: taskConstants.FETCH_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};
//b4: fetchTaskFailed vao cai error
export const fetchListTaskFailed = (error) => {
  return {
    type: taskConstants.FETCH_TASK_FAILED,
    payload: {
      error,
    },
  };
};

export const filterTask = (keyword) => {
  return {
    type: taskConstants.FILTER_TASK,
    payload: {
      keyword,
    },
  };
};

export const filterTaskSuccess = (data) => {
  return {
    type: taskConstants.FILTER_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};
