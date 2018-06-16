import {normalizedArticles as defaultArticles} from '../fixtures';
import { DELETE_ARTICLE, SET_COMMENT } from '../constants';

const articlesMap = defaultArticles.reduce( (acc, article) => {
    acc[article.id] = article;
    return acc;
}, {});

export default (articleState = articlesMap, action) => {
    const {type, payload, generateId} = action;
    const copyArticles = {... articleState};


    switch (type) {

        case DELETE_ARTICLE:
            delete copyArticles[payload.id];
            return copyArticles;

        case SET_COMMENT:

            if (copyArticles[payload.id].comments) {
                copyArticles[payload.id].comments.push(generateId);

            } else {
                copyArticles[payload.id].comments = [generateId];
            }

            return copyArticles;

    }

    return articleState;
}