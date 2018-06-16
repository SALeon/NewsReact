import {normalizedComments as defaultComments} from '../fixtures';
import {SET_COMMENT} from "../constants";

const commentMap = defaultComments.reduce((acc, comment) => {
    acc[comment.id] = comment;
    return acc;
}, {});

export default (comments = commentMap, action) => {
    const {type, payload, generateId} = action;

    switch (type) {

        case SET_COMMENT:
            const k= {
                ...comments,
                [generateId]: {
                    'id': generateId,
                    'text': payload.text,
                    'user': payload.user
                }
            };

            return k;
    }

    return comments;
}