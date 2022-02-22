import { combineReducers } from "redux";
import reportReducer from './reportReducer';
import taskReducer from "./taskReducer";
import validateReducer from "./validateReducer";

const allReducers = combineReducers({
    reports: reportReducer,
    tasks: taskReducer,
    validate: validateReducer
});

export default allReducers;