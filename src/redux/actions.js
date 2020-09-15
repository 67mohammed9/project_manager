import { ADD_TASK, DELETE_TASK } from "./actionTypes";

let nextId =4;
export const addTask= (task)=>{
    return {
        type: ADD_TASK,
        payload: {
            id : ++nextId,
            description : task,
        }
    }
}

export const deleteTask= (taskId, projectId)=>{
    return {
        type: DELETE_TASK,
        payload: {
            projectId,
            taskId,
        }
    }
}