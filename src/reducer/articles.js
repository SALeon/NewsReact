import {DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES} from '../constants';
import {arrToMap} from "../helpers";
import {Map, Record} from 'immutable';

const ArticleRecord = Record({
    id: null,
    text: null,
    title: '',
    comments: []
});

const defaultState = new Map({});

export default (articleState = defaultState, action) => {
    const {type, payload, generateId, response} = action;

    switch (type) {
        case DELETE_ARTICLE:
            return articleState.delete(payload.id);

        case ADD_COMMENT:
            return articleState.updateIn([payload.articleId, 'comment']
                , comments => comments.concat(generateId));

        case LOAD_ALL_ARTICLES:
            return arrToMap(response, ArticleRecord);
    }

    return articleState;
}