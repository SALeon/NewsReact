import {normalizedComments as defaultComments} from '../fixtures';
import {ADD_COMMENT, LOAD_COMMENTS,START ,SUCCESS} from "../constants";
import {arrToMap} from "../helpers";
import {Record, OrderedMap} from 'immutable';

const CommentRecord = Record({
    id: null,
    text: null,
    user: null,
});

const ReducerState = Record({
    loading: false,
    loaded: false,
    entities: new OrderedMap({})
});

const defaultState = new ReducerState();

export default (comments = defaultState, action) => {
    const {type, payload, generateId, response} = action;

    switch (type) {

        case LOAD_COMMENTS + START:
            return comments
                .set('loading', true);

        case LOAD_COMMENTS + SUCCESS:
            return comments
                .set('entities', arrToMap(response, CommentRecord))
                .set('loading', false)
                .set('loaded', true);

        case ADD_COMMENT:
            return {
                ...comments,
                [generateId]: {
                    ...payload.comment,
                    'id': generateId
                }
            };
    }

    return comments;
}