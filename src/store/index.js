import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer'
import logger from '../middlewares/logger';
import generateId from '../middlewares/generateId';
import api from '../middlewares/api';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import history from '../history';

const enhancer = applyMiddleware(thunk, api,routerMiddleware(history), generateId, logger);
const store = createStore(reducer, {}, enhancer);

//dev only
window.store = store;

export default store;