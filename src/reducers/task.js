import * as taskTypes from "../actions/constants/task";
import { toastError, toastSuccess } from "../helpers/toastHelper";
const initialState = {
  listTask: [],
  taskEditing: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case taskTypes.FETCH_TASK: {
      //show task
      return {
        ...state,
        listTask: [],
      };
    }
    case taskTypes.FETCH_TASK_SUCCESS: {
      //show task thành công
      const { data } = action.payload;
      return {
        ...state,
        listTask: data,
      };
    }
    case taskTypes.FETCH_TASK_FAILED: {
      //show task thất bại
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
        listTask: [],
      };
    }
    case taskTypes.FILTER_TASK_SUCCESS: {
      //filter task
      const { dataFilter } = action.payload;
      return {
        ...state,
        listTask: dataFilter,
      };
    }
    case taskTypes.ADD_TASK: {
      //add task
      return {
        ...state,
      };
    }
    case taskTypes.ADD_TASK_SUCCESS: {
      //add task thành công
      const { data } = action.payload;
      toastSuccess("Thêm mới công việc thành công!");
      return {
        ...state,
        // listTask: state.listTask.concat([data]), // them data ở đằng sau dùng hàm concat để nối 2 mảng
        listTask: [data, ...state.listTask], // thêm data ở đăng trước
      };
    }
    case taskTypes.ADD_TASK_FAILED: {
      //add task thất bại
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }
    case taskTypes.SET_TASK_EDITING: {
      // SET Editing task thất bại
      const { taskEditing } = action.payload;
      return {
        ...state,
        taskEditing: taskEditing,
      };
    }
    case taskTypes.UPDATE_TASK: {
      return {
        ...state,
      };
    }
    case taskTypes.UPDATE_TASK_SUCCESS: {
      //update task thanh cong
      const { data } = action.payload;
      const { listTask } = state;
      const index = listTask.findIndex((item) => item.id === data.id);
      if (index !== -1) {
        const newList = [
          ...listTask.slice(0, index),
          data,
          ...listTask.slice(index + 1),
        ];
        toastSuccess("Sửa công việc thành công");
        return {
          ...state,
          listTask: newList,
        };
      }
      return {
        ...state,
      };
    }
    case taskTypes.UPDATE_TASK_FAILED: {
      //update task thất bại
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }

    case taskTypes.DELETE_TASK: {
      return {
        ...state,
      };
    }
    case taskTypes.DELETE_TASK_SUCCESS: {
      //delete task thanh cong
      const { data: taskID } = action.payload;
      toastSuccess("Xoá công việc thành công");
      return {
        ...state,
        listTask: state.listTask.filter((item) => item.id !== taskID),
      };
    }
    case taskTypes.DELETE_TASK_FAILED: {
      //update task thất bại
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
export default reducer;
