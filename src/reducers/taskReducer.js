// import { ActionTypes } from "../constants/contants";
import { createSlice, current } from '@reduxjs/toolkit';

/**
* 
* @param {[]} state
* @param {{}} payload
* @returns {[]}
* @description adds task
*/
const addTask = (state, { payload }) => {
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
* @description edits task
*/
const editTask = (state, { payload }) => {
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
* @description deletes task
*/
const delTask = (state, { payload }) => {
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
* @description search task
*/
const searchTask = (state, { payload }) => {
    const { value, setSearchTasks } = payload;
    const currentState = current(state);
    let tasks = [];

    if(!isNaN(value)) currentState.map(obj => (obj.phase.search(value) !== -1 ? tasks.push(obj) : null))
    else currentState.map(obj => (obj.task.toLowerCase().search(value.toLowerCase()) !== -1 ? tasks.push(obj) : null))
    
    setSearchTasks(tasks);
}

export const taskReducer = createSlice({
    name: 'task',
    initialState: [],
    reducers: {
        addTaskAssigned: addTask,
        delTaskAssigned: delTask,
        editTaskAssigned: editTask,
        searchTaskAssigned: searchTask
    }
})

export const {
    addTaskAssigned,
    delTaskAssigned,
    editTaskAssigned,
    searchTaskAssigned
} = taskReducer.actions;

export default taskReducer.reducer;