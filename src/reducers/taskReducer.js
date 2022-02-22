import { ActionTypes } from "../constants/contants";

const initialState = [];
const delTask = (payload, state) => {
    const {deleteIds, setDeleteIds, setShowDel } = payload
    for(let i=0; i<state.length; i++) {
        const obj = state[i]
        if (deleteIds.indexOf(obj.id) !== -1) {
            state.splice(i, 1);
            i--;
        }
    }
    setDeleteIds([])
    setShowDel(false)
}

const taskReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_TASK_ASSIGNED:
            const id = Math.round(Math.random()*100000)
            state.push({id, ...payload})
            return state
        case ActionTypes.DEL_TASK:
            delTask(payload, state)
            return state = [...state]
        default:
            return state;
    }
}

export default taskReducer;