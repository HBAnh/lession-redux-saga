import { combineReducers } from "redux";
import task from './task';
import ui from './ui';

const rootReducer = combineReducers({ // combine cac cai reducer
    task: task, 
    ui: ui
});

export default rootReducer;
