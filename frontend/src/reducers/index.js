import { combineReducers } from 'redux';
import coursesReducer from './coursesReducer';
import alertReducer from './alertReducer';

export default combineReducers({ coursesReducer });
