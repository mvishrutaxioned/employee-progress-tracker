import { createSlice, current } from "@reduxjs/toolkit";

/**
 * 
 * @param {[]} state
 * @param {{}} payload
 * @returns {[]}
 * @description adds scheduled report
 */
const addReport = (state, { payload }) => {
    const currentState = current(state);
    if(payload.id) {
        state.splice(state.findIndex(e => e.id === payload.id), 1, payload)
    } else {
        const id = Math.round(Math.random()*1000000)
        currentState.push({id, ...payload})
    }
    return state;
}

/**
 * 
 * @param {[]} state
 * @param {{}} payload
 * @returns {[]}
 * @description edits scheduled report
 */
const editReport = (state, { payload }) => {
    const {setEditInfo, setShowEdit, setEditId, editId} = payload;
    const currentState = current(state);
    setShowEdit(false)
    setEditInfo(currentState.find(e => e.id === editId))
    setEditId(null)
}

/**
 * 
 * @param {[]} state
 * @param {{}} payload
 * @returns {[]}
 * @description deletes one or multiple scheduled report
 */
const delReport = (state, { payload }) => {
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

/**
 * 
 * @param {[]} state
 * @param {{}} payload
 * @returns {[]}
 * @description searches schedule report
 */
const searchReport = (state, { payload }) => {
    const { value, setSearchReports } = payload;
    const currentState = current(state);
    const reports = [];

    if(!isNaN(value)) currentState.map(obj => (obj.hours.toLowerCase().search(value) !== -1 ? reports.push(obj) : null))
    else currentState.map(obj => (obj.name.toLowerCase().search(value) !== -1 ? reports.push(obj) : null))

    setSearchReports(reports);
}

export const reportReducer = createSlice({
    name: "report",
    initialState: [],
    reducers: {
        addScheduleReport: addReport,
        delScheduleReport: delReport,
        editScheduleReport: editReport,
        searchScheduleReports: searchReport
    }
})

export const {
    addScheduleReport,
    delScheduleReport,
    editScheduleReport,
    searchScheduleReports } = reportReducer.actions;

export default reportReducer.reducer;