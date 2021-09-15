import { combineReducers } from 'redux';
import coursesReducer from './coursesReducer';
import authReducer from './authReducer';

export default combineReducers({ coursesReducer, authReducer });
