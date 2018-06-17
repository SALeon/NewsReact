import {normalizedComments as defaultComments} from '../fixtures';
import {ADD_COMMENT} from "../constants";
import {arrToMap} from "../helpers";

export default (comments = arrToMap(defaultComments), action) => {
    const {type, payload, generateId} = action;

    switch (type) {

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