import {normalizedArticles as defaultArticles} from '../fixtures';
import {DELETE_ARTICLE, ADD_COMMENT} from '../constants';
import {arrToMap} from "../helpers";

export default (articleState = arrToMap(defaultArticles), action) => {
    const {type, payload, generateId} = action;

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
    }
    return articleState;
}