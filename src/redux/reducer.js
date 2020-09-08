import {ADD_TASK, DELETE_TASK} from './actionTypes';
import { initialTasks } from './tasks';

export const reducer = (state = initialTasks, action) =>{
    switch(action.type){
        case ADD_TASK:
            break;
        case DELETE_TASK:
            break;
        default:
            return state;
    }
}