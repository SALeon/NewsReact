import { createSelector } from 'reselect'

const filtersGetter = state => state.filters;
const articlesGetter = state => state.articles;
const commentGetter = state => state.comments;
const idGetter = (state, props) => props.id;

export const filtratedArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
    const {selected, dateRange: {from, to}} = filters;

    return articles.filter(article => {
        const published = Date.parse(article.date);
        return (!selected.length || selected.includes(article.id))
            && (!from || !to || (published > from && published < to))
    });
});

export const commentSelectorFactory = () =>
    createSelector(commentGetter, idGetter, (comments, id) => {
   return comments.find(comment => comment.id === id)
});