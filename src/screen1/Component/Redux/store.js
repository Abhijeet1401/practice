import {legacy_createStore as createStore} from 'redux';

import combineReducer from './reducers/combineReducer';
//import countReducer from './reducers/countReducer';

const store = createStore(combineReducer);

export default store;
