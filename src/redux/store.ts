import {createStore,applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import {exchangeReducer} from './reducer';

export const store = createStore(exchangeReducer, applyMiddleware(thunkMiddleware));
