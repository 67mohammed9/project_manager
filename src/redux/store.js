import { createStore } from 'redux';
import {taskReducer} from './reducer';
import { initialState } from './tasks';

export const store = createStore(taskReducer);


