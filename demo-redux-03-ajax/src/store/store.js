import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {countryReducer} from './reducers/country-reducer';

const mainReducer = combineReducers({
    country: countryReducer
})

export const store = createStore(mainReducer, applyMiddleware(thunkMiddleware));
export default store;