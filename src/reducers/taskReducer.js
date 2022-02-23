import { ActionTypes } from "../constants/contants";

const initialState = [];

const addTask = (payload, state) => {
    if(payload.id) {
        const newData = {...payload};
        state = state.map(e => (e.id === payload.id ? Object.assign({}, e, newData) : e))
    } else {
        const id = Math.round(Math.random()*1000000)
        state.push({id, ...payload})
    }
    return state
}

const editTask = (payload, state) => {
    const {setEditInfo, setShowEdit, setEditId, editId} = payload;
    setShowEdit(false)
    setEditInfo(state.find(e => e.id === editId))
    setEditId(null)
    return state;
}

const delTask = (payload, state) => {
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

const searchTask = (payload, state) => {
    const { value, setSearchTasks } = payload;
    let tasks = [];

    if(!isNaN(value)) state.map(obj => (obj.phase.search(value) !== -1 ? tasks.push(obj) : null))
    else state.map(obj => (obj.task.toLowerCase().search(value.toLowerCase()) !== -1 ? tasks.push(obj) : null))
    
    setSearchTasks(tasks);
    return state;
}

const taskReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_TASK_ASSIGNED:
            return addTask(payload, state)
        case ActionTypes.DEL_TASK:
            return delTask(payload, state)
        case ActionTypes.EDIT_TASK:
            return editTask(payload, state)
        case ActionTypes.SEARCH_TASKS:
            return searchTask(payload, state)
        default:
            return state;
    }
}

export default taskReducer;