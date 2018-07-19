import {
    DELETE_ARTICLE,
    INCREMENT,
    FILTER_DATE_RANGE,
    ADD_COMMENT,
    FILTER_SELECT,
    LOAD_ALL_ARTICLES,
    LOAD_ARTICLE, START, FAIL, SUCCESS, LOAD_COMMENTS, LOAD_COMMENTS_PAGE
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

export function loadComments (articleId) {
    return {
        type: LOAD_COMMENTS,
        payload: {articleId},
        callAPI: `/api/comment?article=${articleId}`
    }
}

export function loadAllComments () {
    return {
        type: LOAD_COMMENTS_PAGE,
        callAPI: `/api/comment`
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

export function checkAndLoadCommentsForPage(page) {
    return (dispatch, getState) => {
        const {comments: {pagination}} = getState();
        if (pagination.getIn([page,'loading']) || pagination.getIn([page, 'ids'])) {
            return;
        }

        dispatch({
            type: LOAD_COMMENTS_PAGE,
            payload: {page},
            callAPI: `/api/comment?limit=5&offset=${(page - 1) * 5}`
        });
    }
}

// export function loadArticle(id) {
//     return{
//         type: LOAD_ARTICLE,
//         callAPI: '/api/article/${id}'
//     }
// }