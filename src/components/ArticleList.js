import React ,{Component} from 'react';
import Index from './Artcile/index';
import PropTypes from 'prop-types';
import accordion from '../decorators/accordion';
import {connect} from 'react-redux';
import {articles as defaultArticles} from "../fixtures";
import {FILTER_DATE_RANGE} from "../constants";

class ArticleList extends Component {
   static propTypes = {
       //from connect
       articles: PropTypes.array.isRequired,

       //from toggleOpen decorator
       toggleOpen: PropTypes.func.isRequired
   };

    render() {
        const {toggleOpen, articles} = this.props;

        const articleElements = articles.map((article) =>
            <li key = {article.id}>
                <Index click = {toggleOpen} isView = {this.isVisible(article.id)} article = {article}/>
            </li>);


        return (<div>
                <ul>
                    {articleElements}
                </ul>
            </div>
        );
    }


    isVisible(id) {
        return id === this.props.openItem;
    }

}

// ArticleList.propTypes = {
//     articles: PropTypes.array.isRequired
// };

export default connect(({articles, filters}) => {
    const {selected, dateRange: {from, to}} = filters;

    const filteredArticles = articles.filter(article => {
        const published = Date.parse(article.date);
        return (!selected.length || selected.includes(article.id))
            && (!from || !to || (published > from && published < to))
    });

    return {articles: filteredArticles}

})(accordion(ArticleList));
