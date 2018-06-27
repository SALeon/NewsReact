import {
    DELETE_ARTICLE,
    INCREMENT,
    FILTER_DATE_RANGE,
    ADD_COMMENT,
    FILTER_SELECT,
    LOAD_ALL_ARTICLES,
    LOAD_ARTICLE, START, FAIL, SUCCESS, LOAD_COMMENTS
} from '../constants';

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

export function setComment(comment, articleId){
    return {
        type: ADD_COMMENT,
        payload: {comment, articleId},
        generateId: true
    }
}

export function loadAllArticles () {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: '/api/article'
    }
}

export function loadArticle (id) {
    return (dispatch) => {
        dispatch({
            type: LOAD_ARTICLE + START,
            payload: {id}
        });

        fetch(`/api/article/${id}`)
            .then(res => res.json())
            .then(response => dispatch({
                type: LOAD_ARTICLE + SUCCESS,
                payload: {id, response}
            }))
            .catch(error => dispatch({
                type: LOAD_ARTICLE + FAIL,
                payload: {id, error}
            }))
    }
}

export function loadCommits (article) {
    return (dispatch) => {
        dispatch({
            type: LOAD_COMMENTS + START,
            payload: {article}
        });

        fetch(`/api/comment?article=${article}`)
            .then(res => res.json())
            .then(response => dispatch({
                type: LOAD_COMMENTS + SUCCESS,
                payload: {article, response}
            }))
            .catch(error => dispatch({
                type: LOAD_ARTICLE + FAIL,
                payload: {article, error}
            }))
    }
}

// export function loadArticle(id) {
//     return{
//         type: LOAD_ARTICLE,
//         callAPI: '/api/article/${id}'
//     }
// }