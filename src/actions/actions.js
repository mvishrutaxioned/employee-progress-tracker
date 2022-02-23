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

export const editReport = report => {
    return {
        type: ActionTypes.EDIT_REPORT,
        payload: report
    }
}

export const searchReport = report => {
    return {
        type: ActionTypes.SEARCH_REPORTS,
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

export const editTask = task => {
    return {
        type: ActionTypes.EDIT_TASK,
        payload: task
    }
}

export const searchTask = task => {
    return {
        type: ActionTypes.SEARCH_TASKS,
        payload: task
    }
}