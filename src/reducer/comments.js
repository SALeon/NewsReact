import {normalizedComments as defaultComments} from '../fixtures';
import {ADD_COMMENT, ADD_COMMENTS_PAGE, LOAD_COMMENTS, START, LOAD_COMMENTS_PAGE, SUCCESS} from "../constants";
import {arrToMap} from "../helpers";
import {Record, OrderedMap, Map} from 'immutable';

const CommentRecord = Record({
    id: null,
    text: null,
    user: null,
});

const ReducerState = Record({
    entities: new OrderedMap({}),
    pagination: new Map({})
});

const defaultState = new ReducerState();

export default (comments = defaultState, action) => {
    const {type, payload, generateId, response} = action;

    switch (type) {
        case LOAD_COMMENTS + SUCCESS:
            return comments.update('entities', entities => entities.merge(arrToMap(response, CommentRecord)));

        case ADD_COMMENT:
            return comments.setIn(['entities', generateId], new CommentRecord({...payload.comment, id: generateId}));

        case LOAD_COMMENTS_PAGE + START:
            return comments.setIn(['pagination','loading'],true);

        case LOAD_COMMENTS_PAGE + SUCCESS:
            return comments
                .mergeIn(['entities'], arrToMap(response.records, CommentRecord))
                .setIn(['pagination', 'ids'],  response.records.map(comment => comment.id))
                .setIn(['pagination', 'loading'], false)
    }

    return comments;
}