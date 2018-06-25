import {ADD_COMMENT, DELETE_ARTICLE, FAIL, LOAD_ALL_ARTICLES, LOAD_ARTICLE, START, SUCCESS} from '../constants';
import {arrToMap} from "../helpers";
import {OrderedMap, Record} from 'immutable';

const ArticleRecord = Record({
    id: null,
    text: null,
    title: '',
    loading: false,
    comments: []
});

const ReducerState = Record({
    loading: false,
    loaded: false,
    entities: new OrderedMap({})
});

const defaultState = new ReducerState();

export default (articleState = defaultState, action) => {
    const {type, payload, generateId, response} = action;

    switch (type) {
        case ADD_COMMENT:
            return articleState.updateIn(
                ['entities', payload.articleId, 'comment'],
                comments => comments.concat(generateId)
            );

        case DELETE_ARTICLE:
            return articleState.deleteIn(['entities', payload.id]);

        case LOAD_ALL_ARTICLES + START:
            return articleState.set('loading', true);

        case LOAD_ARTICLE + START:
            return articleState.setIn(['entities', payload.id, 'loading'], true);

        case LOAD_ALL_ARTICLES + SUCCESS:
            return articleState
                .set('entities', arrToMap(response, ArticleRecord))
                .set('loading', false)
                .set('loaded', true);

        case LOAD_ARTICLE + SUCCESS:
            return articleState.setIn(['entities', payload.id], new ArticleRecord(payload.response));
    }

    return articleState;
}