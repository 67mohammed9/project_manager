import {ADD_TASK, DELETE_TASK} from './actionTypes';
import {initialState} from './tasks';


export const taskReducer = (state = initialState, action) =>{
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
           
        //tasks: state.projects.find(project => project.id == action.payload.projectId ).tasks.filter((task) => task.id !== action.payload.taskId) 
        default: return state
    }
}




