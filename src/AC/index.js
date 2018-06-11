import {DELETE_ARTICLE, INCREMENT, FILTER_DATE_RANGE, FILTER_DATE_SELECT} from '../constants';

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
        type: FILTER_DATE_SELECT,
        payload: {selected}
    }
}