import { ADD_TASK, DELETE_TASK } from "./actionTypes";

let nextId =4;
export const addTask= (task, projectId)=>{
    return {
        type: ADD_TASK,
        payload: {
            projectId : projectId,
            newtask:{
            id : ++nextId,
            description : task,
            }
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