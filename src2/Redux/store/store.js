import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import CombineReducer from '../reducers/CombineReducer';

const store = createStore(CombineReducer, applyMiddleware(thunk));

export default store;
