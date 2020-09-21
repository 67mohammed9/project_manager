import { ADD_PROJECT, ADD_TASK, DELETE_TASK, DELETE_PROJECT} from "./actionTypes";

let nextTaskId =4;
let nextProjectId=4;
export const addTask= (task, projectId)=>{
    return {
        type: ADD_TASK,
        payload: {
            projectId : projectId,
            newtask:{
            id : ++nextTaskId,
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

export const addProject= (projectTitle,projectAbout)=>{
    return {
        type: ADD_PROJECT,
        payload: {
           id: ++nextProjectId,
           title: projectTitle,
           about: projectAbout,
           tasks: [],
        }
    }
}

export const deleteProject= (projectId)=>{
    return {
        type: DELETE_PROJECT,
        payload: {
            projectId,
        }
    }
}