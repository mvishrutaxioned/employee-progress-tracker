// import { ActionTypes } from "../constants/contants";
import { createSlice, current } from "@reduxjs/toolkit";

const addReport = (payload, state) => {
    const currentState = current(state);
    if(payload.id) {
        const newData = {...payload};
        state.splice(state.findIndex(e => e.id === payload.id), 1, newData)
    } else {
        const id = Math.round(Math.random()*1000000)
        currentState.push({id, ...payload})
    }
    return state;
}

const editReport = (payload, state) => {
    const {setEditInfo, setShowEdit, setEditId, editId} = payload;
    const currentState = current(state);
    setShowEdit(false)
    setEditInfo(currentState.find(e => e.id === editId))
    setEditId(null)
    return state;
}

const delReport = (payload, state) => {
    const {deleteIds, setDeleteIds, setShowDel, setShowEdit } = payload
    for(let i=0; i<state.length; i++) {
        const obj = state[i]
        if (deleteIds.indexOf(obj.id) !== -1) {
            state.splice(i, 1);
            i--;
        }
    }
    setDeleteIds([])
    setShowDel(false)
    setShowEdit(false)
    return state;
}

const searchReport = (payload, state) => {
    const { value, setSearchReports } = payload;
    const currentState = current(state);
    const reports = [];

    if(!isNaN(value)) currentState.map(obj => (obj.hours.toLowerCase().search(value) !== -1 ? reports.push(obj) : null))
    else currentState.map(obj => (obj.name.toLowerCase().search(value) !== -1 ? reports.push(obj) : null))

    setSearchReports(reports);
    return state;
}

export const reportReducer = createSlice({
    name: "report",
    initialState: [],
    reducers: {
        addScheduleReport: (state, {payload}) => {
            return addReport(payload, state)
        },
        delScheduleReport: (state, {payload}) => {
            return delReport(payload, state)
        },
        editScheduleReport: (state, {payload}) => {
            return editReport(payload, state)
        },
        searchScheduleReports: (state, {payload}) => {
            return searchReport(payload, state)
        }
    }
})

export const {
    addScheduleReport,
    delScheduleReport,
    editScheduleReport,
    searchScheduleReports } = reportReducer.actions;

export default reportReducer.reducer;

// const reportReducer = (state = initialState, { type, payload }) => {
//     switch (type) {
//         case ActionTypes.ADD_SCHEDULE_REPORT:
//             return addReport(payload, state)
//         case ActionTypes.DEL_REPORT:
//             return delReport(payload, state)
//         case ActionTypes.EDIT_REPORT:
//             return editReport(payload, state)
//         case ActionTypes.SEARCH_REPORTS:
//             return searchReport(payload, state)
//         default:
//             return state;
//     }
// }