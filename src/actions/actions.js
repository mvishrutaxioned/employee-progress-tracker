import { ActionTypes } from "../constants/contants";

export const addScheduleReport = report => {
    return {
        type: ActionTypes.ADD_SCHEDULE_REPORT,
        payload: report
    }
}

export const deleteReport = report => {
    return {
        type: ActionTypes.DEL_REPORT,
        payload: report
    }
}

export const validateFormValues = values => {
    return {
        type: ActionTypes.VALIDATE_FORM_VALUES,
        payload: values
    }
}

export const addTaskAssigned = task => {
    return {
        type: ActionTypes.ADD_TASK_ASSIGNED,
        payload: task
    }
}

export const deleteTask = task => {
    return {
        type: ActionTypes.DEL_TASK,
        payload: task
    }
}