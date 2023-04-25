import {View, Text} from 'react-native';
import React from 'react';
import {combineReducers} from 'redux';
import countReducer from './countReducer';
import countReducer2 from './countReducer2';
const rootReducer = combineReducers({
  countReducer,
  countReducer2
});

export default rootReducer;
