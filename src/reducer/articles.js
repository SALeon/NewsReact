import {normalizedArticles as defaultArticles} from '../fixtures';
import {DELETE_ARTICLE} from '../constants';

const articlesMap = defaultArticles.reduce( (acc, article) => {
    acc[article.id] = article;
    return acc;
}, {});

export default (articleState = articlesMap, action) => {
    const {type, payload} = action;

    switch (type) {

        case DELETE_ARTICLE:
            const copyArticlesId = {... articleState};
            delete copyArticlesId[payload.id];
            return copyArticlesId;
    }

    return articleState;
}