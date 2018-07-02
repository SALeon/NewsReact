import React ,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {filtratedArticlesSelector} from '../selectors';
import {loadAllArticles} from '../AC';
import Loader from './Loader';
import {NavLink} from 'react-router-dom';

class ArticleList extends Component {
   static propTypes = {
       //from connect
       articles: PropTypes.array.isRequired,
       loading: PropTypes.bool.isRequired,
       loaded: PropTypes.bool.isRequired,

       //from toggleOpen decorator
       toggleOpen: PropTypes.func
   };

   componentDidMount() {
       const {loaded, loading, loadAllArticles} = this.props;
      if (!loaded && !loading) {
          loadAllArticles();
      }
   }

    render() {
        const {articles, loading} = this.props;
        if (loading) return <Loader/>;

        const articleElements = articles. map((article) =>
            <li key = {article.id}>
                <NavLink to = {`/articles/${article.id}`} activeStyle = {{color: 'red'}}>
                    {article.title}
                </NavLink>
            </li>);

        return (
            <>
                <ul>
                    {articleElements}
                </ul>
            </>
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
}), {loadAllArticles})(ArticleList);
