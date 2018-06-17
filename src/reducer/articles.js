import {normalizedArticles as defaultArticles} from '../fixtures';
import {DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES} from '../constants';
import { arrToMap, mapToArr } from "../helpers";

export default (articleState = {}, action) => {
    const {type, payload, generateId, response} = action;

    switch (type) {

        case DELETE_ARTICLE:
            const copyArticles = {...articleState};
            delete copyArticles[payload.id];
            return copyArticles;

        case ADD_COMMENT:
            const article = articleState[payload.articleId];
            return {
                ...articleState,
                [payload.articleId]: {
                    ...article,
                    comments: (article.comments || []).concat(generateId)
                }
            };

        case LOAD_ALL_ARTICLES:
            return mapToArr(response);
    }
    return articleState;
}