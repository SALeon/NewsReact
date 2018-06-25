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
    const {type, payload, generateId} = action;

    switch (type) {

        case LOAD_COMMENTS + START:
            return ;

        case LOAD_COMMENTS + SUCCESS:
            return ;

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