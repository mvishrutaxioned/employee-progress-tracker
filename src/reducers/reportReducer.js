import { createSlice, current } from "@reduxjs/toolkit";

const addReport = (state, { payload }) => {
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

const editReport = (state, { payload }) => {
    const {setEditInfo, setShowEdit, setEditId, editId} = payload;
    const currentState = current(state);
    setShowEdit(false)
    setEditInfo(currentState.find(e => e.id === editId))
    setEditId(null)
}

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