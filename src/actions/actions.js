import { ActionTypes } from "../constants/contants";

export const addScheduleReport = report => {
    return {
        type: ActionTypes.ADD_SCHEDULE_REPORT,
        payload: report
    }
}

export const addTaskAssigned = task => {
    return {
        type: ActionTypes.ADD_TASK_ASSIGNED,
        payload: task
    }
}