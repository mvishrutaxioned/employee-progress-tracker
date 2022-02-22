import { ActionTypes } from "../constants/contants";
import { days } from "../utils/formData";

const initialState = {};

const validate = values => {
    const errors = {};
    const regexNum = /[0-9]/g;

    if(!values.name) errors.name = 'Please select employee name'

    if(!values.hours) errors.hours = 'Hours field is required'
    else if (values.hours > 100 || !regexNum.test(values.hours)) errors.hours = "Please enter valid hours"

    if(!values.weekDate) errors.weekDate = 'Please select week date'

    for(var i of days) {
      if(!values[i.toLowerCase()]) errors[i] = `Please select ${i} schedule`;
    }
    return errors
}

const validateReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.VALIDATE_FORM_VALUES:
            state = validate(payload)
            return state
        default:
            return state;
    }
}

export default validateReducer;