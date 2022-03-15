import * as taskTypes from '../constants/task';
import { toastError } from '../helpers/toastHelper';

const initialState = {
  listTask: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case taskTypes.FETCH_TASK: 
      return {
        ...state,
        listTask: []
      }
    case taskTypes.FETCH_TASK_SUCCESS: 
      const {data} = action.payload;
      return {
        ...state,
        listTask: data
    }
    case taskTypes.FETCH_TASK_FAILED: 
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
        listTask: []
      }
    default:
      return state;
  }
};
export default reducer;
