import * as taskConstants from "./constants/task";
import { STATUSES } from "./constants/index";
//Show task
export const fetchListTask = (params = {}) => {
  return {
    type: taskConstants.FETCH_TASK,
    payload: {
      params,
    },
  };
};
export const fetchListTaskSuccess = (data) => {
  return {
    type: taskConstants.FETCH_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchListTaskFailed = (error) => {
  return {
    type: taskConstants.FETCH_TASK_FAILED,
    payload: {
      error,
    },
  };
};
//Filter task
export const filterTask = (keyword) => {
  return {
    type: taskConstants.FILTER_TASK,
    payload: {
      keyword,
    },
  };
};
export const filterTaskSuccess = (dataFilter) => {
  return {
    type: taskConstants.FILTER_TASK_SUCCESS,
    payload: {
      dataFilter,
    },
  };
};
//Add task
export const addTask = (title, decriptions) => {
  return {
    type: taskConstants.ADD_TASK,
    payload: {
      title,
      decriptions,
    },
  };
};
export const addTaskSuccess = (data) => {
  return {
    type: taskConstants.ADD_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};
export const addTaskFailed = (error) => {
  return {
    type: taskConstants.ADD_TASK_FAILED,
    payload: {
      error,
    },
  };
};
//Set task Editing
export const setTaskEditing = (taskEditing) => {
  return {
    type: taskConstants.SET_TASK_EDITING,
    payload: {
      taskEditing,
    },
  };
};

//Edit task
export const updateTask = (title, decriptions, status = STATUSES[0].value) => {
  return {
    type: taskConstants.UPDATE_TASK,
    payload: {
      title,
      decriptions,
      status,
    },
  };
};
export const updateTaskSuccess = (data) => {
  return {
    type: taskConstants.UPDATE_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};
export const updateTaskFailed = (error) => {
  return {
    type: taskConstants.UPDATE_TASK_FAILED,
    payload: {
      error,
    },
  };
};

//Edit task
export const deleteTask = (id) => {
  return {
    type: taskConstants.DELETE_TASK,
    payload: {
      id,
    },
  };
};
export const deleteTaskSuccess = (data) => {
  return {
    type: taskConstants.DELETE_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};
export const deleteTaskFailed = (error) => {
  return {
    type: taskConstants.DELETE_TASK_FAILED,
    payload: {
      error,
    },
  };
};
