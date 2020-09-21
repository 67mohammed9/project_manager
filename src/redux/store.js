import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension'
import reducer from '../redux/reducer'
import { initialState } from './tasks';




export const store = createStore(reducer,initialState, composeWithDevTools(
    applyMiddleware()
));

console.log(store.getState())