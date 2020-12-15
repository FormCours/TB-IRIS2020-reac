import {createStore, combineReducers} from 'redux';
import { counterReducer } from './reducers/counter-reducer';
import { helloReducer } from './reducers/hello-reducer';


const reducer =  combineReducers({
    counter: counterReducer,
    hello: helloReducer
})


export const store = createStore(reducer);
export default store;