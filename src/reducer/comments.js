import {normalizedComments as defaultComments} from '../fixtures';
import {ADD_COMMENT, LOAD_COMMENTS,SUCCESS} from "../constants";
import {arrToMap} from "../helpers";
import {Record, OrderedMap} from 'immutable';

const CommentRecord = Record({
    id: null,
    text: null,
    user: null,
});

const ReducerState = Record({
    entities: new OrderedMap({})
});

const defaultState = new ReducerState();

export default (comments = defaultState, action) => {
    const {type, payload, generateId, response} = action;

    switch (type) {
        case LOAD_COMMENTS + SUCCESS:
            return comments.update('entities', entities => entities.merge(arrToMap(response, CommentRecord)));

        case ADD_COMMENT:
            return comments.setIn(['entities', generateId], new CommentRecord({...payload.comment, id: generateId}));
    }

    return comments;
}