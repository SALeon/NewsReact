import {combineReducers} from 'redux';
import counterReducer from './couter';
import articles from './articles';
import filters from './filters';
import comments from './comments';

export default combineReducers({
    count: counterReducer,
    articles,
    filters,
    comments
});
