import { combineReducers } from "redux";
import reportReducer from './reportReducer';
import taskReducer from "./taskReducer";

const allReducers = combineReducers({
    reports: reportReducer,
    tasks: taskReducer
});

export default allReducers;