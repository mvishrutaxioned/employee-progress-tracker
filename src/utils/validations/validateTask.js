import { taskErr } from "../formData"

/**
* @param {obj} values
* @param {obj} errors
* @returns {obj}
* @description validates task name
*/
export const validateTask = (values, errors) => {
    if(!values.task) {
        return errors.task = taskErr.task
    }
}

/**
* @param {obj} values
* @param {obj} errors
* @returns {obj}
* @description validates task phase
*/
export const validatePhase = (values, errors) => {
    if(!values.phase) {
        return errors.phase = taskErr.phase
    }
}

/**
* @param {obj} values
* @param {obj} errors
* @returns {obj}
* @description validates task status
*/
export const validateStatus = (values, errors) => {
    if(!values.status) {
        return errors.status = taskErr.status
    }
}

/**
* @param {obj} values
* @param {obj} errors
* @returns {obj}
* @description validates task assign to
*/
export const validateAssignTo = (values, errors) => {
    if(!values.assignTo) {
        return errors.assignTo = taskErr.assignTo
    }
}

/**
* @param {obj} values
* @param {obj} errors
* @returns {obj}
* @description validates task due date
*/
export const validateDueDate = (values, errors) => {
    if(!values.dueDate) {
        return errors.dueDate = taskErr.dueDate
    }
}