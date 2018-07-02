// import  React from 'react';
//
// export default function Index(props) {
//     const {article} = props;
//     return(
//         <div>
//             <h3>{article.title}</h3>
//             <section>{article.text}</section>
//         </div>
//     )
// }

import React, {Component} from 'react';
import CommentList from '../CommenList/index';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import './style.css';
import {deleteArticle, loadArticle} from '../../AC';
import Loader from '../Loader';
import {connect} from 'react-redux';

class Article extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        //from connect
        article: PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            text: PropTypes.string
        })
    };


    render() {
        const {article, isView} = this.props;
        if (!article) {return null}
        return (
            <div>
                <h3>{article.title}</h3>
                <button >
                    {isView ? 'close' : 'open'}
                </button>
                <button onClick = {this.handleDelete}>delete me</button>
                <CSSTransitionGroup
                    transitionName = 'article'
                    transitionAppear
                    transitionEnterTimeout = {300}
                    transitionLeaveTimeout = {500}
                    transitionAppearTimeout = {500}
                    component = 'div'
                >
                    {this.getBody()}
                </CSSTransitionGroup>
            </div>
        )
    }

    componentDidMount() {
        const {loadArticle, article, id} = this.props;
         if (!article || (!article.text && !article.loading)) {
            loadArticle(id);
        }
    }

    getBody () {
        const {article, isView} = this.props;
        if (!isView) return null;
        if (article.loading) {
            return <Loader/>
        }
            return <section>
                {article.text}
                <CommentList article={article}/>
            </section>;
    }

    handleDelete = () => {
        const {deleteArticle, article} = this.props;
        deleteArticle(article.id);
    }
}

export default connect((state, ownProps) => ({
  article: state.articles.entities.get(ownProps.id)
}), {deleteArticle, loadArticle})(Article);