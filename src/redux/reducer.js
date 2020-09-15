import {ADD_TASK, DELETE_TASK} from './actionTypes';
import {initialState} from './tasks';


export const taskReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_TASK:
            return{
                ...state,
               tasks: [...state.tasks, action.payload]
            };
        case DELETE_TASK:
            const projects = state.projects;
            const projectToChangeIndex = projects.findIndex((project) => project.id === action.payload.projectId)
            if (projectToChangeIndex === -1){
                return state;
            }
            const project = projects[projectToChangeIndex];
            const updatedProject ={
                ...project,
                tasks: project.tasks.filter(task => task.id !== action.payload.taskId)
            };
            return{
                ...state,
                projects:[
                    ...project.slice(0,projectToChangeIndex),
                    updatedProject,
                    ...project.slice(projectToChangeIndex + 1)
                ]
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