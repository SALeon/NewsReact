import React ,{Component} from 'react';
import Article from './Artcile';
import PropTypes from 'prop-types';
import accordion from '../decorators/accordion';
import {connect} from 'react-redux';
import {filtratedArticlesSelector} from '../selectors'

class ArticleList extends Component {
   static propTypes = {
       //from connect
       articles: PropTypes.array.isRequired,

       //from toggleOpen decorator
       toggleOpen: PropTypes.func.isRequired
   };

    render() {
        const {toggleOpen, articles, lalala} = this.props;

        const articleElements = articles. map((article) =>
            <li key = {article.id}>
                <Article click = {toggleOpen} isView = {this.isVisible(article.id)} article = {article}/>
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

export default connect((state) => {
    return {
        articles: filtratedArticlesSelector(state),
    }
})(accordion(ArticleList));
