import {ADD_TASK, DELETE_TASK} from './actionTypes';
import {initialState} from './tasks';


export const taskReducer = (state = initialState, action) =>{
    switch(action.type) {
        case ADD_TASK: {
            return {
                ...state,
               tasks: [...state.tasks, action.payload]
            };
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





/*
 const content = Object.assign({}, state);
            content.projects = content.projects.map(
                project => {
                    const newObj = { ...project };
                    if (newObj.id === action.payload.projectId) {
                        return newObj.tasks.filter(tasks => tasks.id !== action.payload.taskId);
                    }
                     console.log(state);
                    return newObj;

*/
