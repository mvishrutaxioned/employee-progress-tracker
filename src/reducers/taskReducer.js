// import { ActionTypes } from "../constants/contants";
import { createSlice, current } from '@reduxjs/toolkit';

const addTask = (payload, state) => {
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

const editTask = (payload, state) => {
    const {setEditInfo, setShowEdit, setEditId, editId} = payload;
    const currentState = current(state);
    setShowEdit(false)
    setEditInfo(currentState.find(e => e.id === editId))
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
    return state;
}

const searchTask = (payload, state) => {
    const { value, setSearchTasks } = payload;
    const currentState = current(state);
    let tasks = [];

    if(!isNaN(value)) currentState.map(obj => (obj.phase.search(value) !== -1 ? tasks.push(obj) : null))
    else currentState.map(obj => (obj.task.toLowerCase().search(value.toLowerCase()) !== -1 ? tasks.push(obj) : null))
    
    setSearchTasks(tasks);
    return state;
}

export const taskReducer = createSlice({
    name: 'task',
    initialState: [],
    reducers: {
        addTaskAssigned: (state, {payload}) => {
            return addTask(payload, state);
        },
        delTaskAssigned: (state, {payload}) => {
            return delTask(payload, state);
        },
        editTaskAssigned: (state, {payload}) => {
            return editTask(payload, state);
        },
        searchTaskAssigned: (state, {payload}) => {
            return searchTask(payload, state);
        }
    }
})

export const {
    addTaskAssigned,
    delTaskAssigned,
    editTaskAssigned,
    searchTaskAssigned
} = taskReducer.actions;

export default taskReducer.reducer;

// const taskReducer = (state = initialState, { type, payload }) => {
//     switch (type) {
//         case ActionTypes.ADD_TASK_ASSIGNED:
//             return addTask(payload, state)
//         case ActionTypes.DEL_TASK:
//             return delTask(payload, state)
//         case ActionTypes.EDIT_TASK:
//             return editTask(payload, state)
//         case ActionTypes.SEARCH_TASKS:
//             return searchTask(payload, state)
//         default:
//             return state;
//     }
// }

// export default taskReducer;