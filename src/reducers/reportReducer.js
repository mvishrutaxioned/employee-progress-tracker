import { ActionTypes } from "../constants/contants";

const initialState = [];

const addReport = (payload, state) => {
    if(payload.id) {
        const newData = {...payload};
        state = state.map(e => (e.id === payload.id ? Object.assign({}, e, newData) : e))
    } else {
        const id = Math.round(Math.random()*1000000)
        state.push({id, ...payload})
    }
    return state;
}

const editReport = (payload, state) => {
    const {setEditInfo, setShowEdit, setEditId, editId} = payload;
    setShowEdit(false)
    setEditInfo(state.find(e => e.id === editId))
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
    return state = [...state]
}

const searchReport = (payload, state) => {
    const { value, setSearchReports } = payload;
    const reports = [];

    if(!isNaN(value)) state.map(obj => (obj.hours.toLowerCase().search(value) !== -1 ? reports.push(obj) : null))
    else state.map(obj => (obj.name.toLowerCase().search(value) !== -1 ? reports.push(obj) : null))

    setSearchReports(reports);
    return state;
}

const reportReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_SCHEDULE_REPORT:
            return addReport(payload, state)
        case ActionTypes.DEL_REPORT:
            return delReport(payload, state)
        case ActionTypes.EDIT_REPORT:
            return editReport(payload, state)
        case ActionTypes.SEARCH_REPORTS:
            return searchReport(payload, state)
        default:
            return state;
    }
}

export default reportReducer;