import React ,{Component} from 'react';
import Article from './Artcile';
import PropTypes from 'prop-types';
import accordion from '../decorators/accordion';
import {connect} from 'react-redux';
import {filtratedArticlesSelector} from '../selectors';
import {loadAllArticles} from '../AC';
import Loader from './Loader';

class ArticleList extends Component {
   static propTypes = {
       //from connect
       articles: PropTypes.array.isRequired,
       loading: PropTypes.bool.isRequired,
       loaded: PropTypes.bool.isRequired,

       //from toggleOpen decorator
       toggleOpen: PropTypes.func.isRequired
   };

   componentDidMount(){
       const {loaded, loading, loadAllArticles} = this.props;
      if (!loaded || !loading) {
          loadAllArticles();
      }

   }

    render() {
        const {toggleOpen, articles, loading} = this.props;
        if (loading) return <Loader/>;

        const articleElements = articles. map((article) =>
            <li key = {article.id}>
                <Article
                    click = {toggleOpen}
                    isView = {this.isVisible(article.id)}
                    article = {article}/>
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

export default connect((state) => ({
    articles: filtratedArticlesSelector(state),
    loading: state.articles.loading,
    loaded: state.articles.loaded
}), {loadAllArticles})(accordion(ArticleList));
