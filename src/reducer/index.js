import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import counterReducer from './couter';
import articles from './articles';
import filters from './filters';
import comments from './comments';

export default combineReducers({
    count: counterReducer,
    router: routerReducer,
    articles,
    filters,
    comments
});
