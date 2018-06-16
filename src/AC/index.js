import {DELETE_ARTICLE, INCREMENT, FILTER_DATE_RANGE, SET_COMMENT, FILTER_SELECT} from '../constants';

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: {id}
    }
}

export function changedRange(range) {
    return {
        type: FILTER_DATE_RANGE,
        payload: {range}
    }
}

export function changedSelected(selected) {
    return {
        type: FILTER_SELECT,
        payload: {selected},
    }
}

export function setComment(user, text, id){
    return {
        type: SET_COMMENT,
        payload: {user, text, id},
        generateId: true
    }
}