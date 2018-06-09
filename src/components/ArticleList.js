import React ,{Component} from 'react';
import Article from './Article';
import PropTypes from 'prop-types';
import accordion from '../decorators/accordion';

class ArticleList extends Component {
   static propTypes = {
       article: PropTypes.shape({
           id: PropTypes.string,
           title: PropTypes.string,
           text: PropTypes.string
       }),
       //from toggleOpen decorator
       toggleOpen: PropTypes.func.isRequired
   };

    render() {
        const {toggleOpen, articles} = this.props;

        const articleElements = articles.map((article) =>
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

export default accordion(ArticleList);