import {ADD_TASK, DELETE_TASK, ADD_PROJECT, DELETE_PROJECT} from './actionTypes';
import {initialState} from './tasks';
import {combineReducers} from 'redux'




const taskReducer = (state = initialState, action) =>{
    switch(action.type) {
        case ADD_TASK: {
            let projects = state.projects;
            const projectToChangeIndex = projects.findIndex((project) => project.id == action.payload.projectId);
            if (projectToChangeIndex === -1) {
                return {
                    ...state,
                }
            }
            const project = projects[projectToChangeIndex];
            const updatedProject = {
                ...project,
                tasks: [...project.tasks, {
                    id: action.payload.newtask.id,
                    description: action.payload.newtask.description
                }
                ]
            };
            console.log(updatedProject)
            projects = projects.map(project => {
                if (project.id === updatedProject.id) {
                    return updatedProject;
                }
                else{
                    return{
                        ...state,
                    }
                }
            });
            return {
                ...state,
                projects:[
                    ...projects,
                ]
            }
        }
        case DELETE_TASK: {
            let projects = state.projects;
            const projectToChangeIndex = projects.findIndex((project) => project.id == action.payload.projectId);
            if (projectToChangeIndex === -1) {
                return {
                    ...state,
                }
            }
            const project = projects[projectToChangeIndex];
            const updatedProject = {
                ...project,
                tasks: project.tasks.filter(task => task.id !== action.payload.taskId)
            };
            projects = projects.map(project => {
                if (project.id === updatedProject.id) {
                    return updatedProject;
                }
                else{
                    return{
                        ...state,
                    }
                }
            });
            return {
                ...state,
                projects:[
                    ...projects,
                ]
            }
        }
        default: return state
    }
}

const projectReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_PROJECT:{
            console.log(action.payload)
            return {
                ...state,
                projects:[
                    ...state.projects, action.payload
                ]
            }
        }
        default: return state
    }
}





const rootReducer = combineReducers({
    taskReducer,
    projectReducer
})

export default rootReducer;