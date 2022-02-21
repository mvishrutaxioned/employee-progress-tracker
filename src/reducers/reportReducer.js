import { ActionTypes } from "../constants/contants";

const initialState = [];

const reportReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_SCHEDULE_REPORT:
            const id = Math.round(Math.random()*100000)
            return [...state, { id, ...payload }]
        default:
            return state;
    }
}

export default reportReducer;