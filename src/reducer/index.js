import {combineReducers} from 'redux';
import counterReducer from './couter';

export default combineReducers({
    count: counterReducer
});
