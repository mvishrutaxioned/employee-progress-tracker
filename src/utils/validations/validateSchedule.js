import { reportErr } from "../formData";
import { days } from "../formData";

/**
* @param {obj} values
* @param {obj} errors
* @returns {obj}
* @description validates schedule employee name
*/
export const validateName = (values, errors) => {
    if(!values.name) {
        return errors.name = reportErr.name
    }
}

/**
* @param {obj} values
* @param {obj} errors
* @returns {obj}
* @description validates schedule week date
*/
export const validateWeekDate = (values, errors) => {
    if(!values.weekDate) {
        return errors.weekDate = reportErr.weekDate
    }
}

/**
* @param {obj} values
* @param {obj} errors
* @returns {obj}
* @description validates schedule hours
*/
export const validateHours = (values, errors) => {
    const regexNum = /[0-9]/g;
    if(!values.hours) return errors.hours = reportErr.hours
    else if (values.hours > 100 || !regexNum.test(values.hours)) {
        return errors.hours = reportErr.validHours
    }
}

/**
* @param {obj} values
* @param {obj} errors
* @returns {obj}
* @description validates schedule radios
*/
export const validateScheduleRadios = (values, errors) => {
    for(var i of days) {
        if(!values[i.toLowerCase()]) errors[i] = `${reportErr.radio} ${i.toLowerCase()}`;
    }
}