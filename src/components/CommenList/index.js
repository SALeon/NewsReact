import React, {Component} from 'react';
import Comment from '../Comment';
import toggleOpen from '../../decorators/toggleOpen';
import '../CommentForm/style.css'
import CommentForm from "../CommentForm";
import PropTypes from 'prop-types';
import {loadComments} from "../../AC";
import {connect} from "react-redux";
import Loader from "../Loader";

class CommentList extends Component {

    static propTypes = {
        // from props
        article: PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            text: PropTypes.string
        }).isRequired,
        isOpen: PropTypes.bool.isRequired,

        // from connect
        loadComments: PropTypes.func.isRequired
    };

    static defaultProps = {
        comments: []
    };

    render() {
        const {isOpen, toggleOpen, article} = this.props;
        return (
            <div>
                <button onClick={toggleOpen}>{isOpen ? 'Hide comment' : 'View comment'}</button>
                {this.getBody({article}, isOpen)}{/*article in {} because of Immutable js destructuring*/}
            </div>
        );
    }

    componentWillReceiveProps({isOpen, loadComments, article}) {
        if (!this.props.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded ) {
            loadComments(article.id)
        }
    }

    getBody({article: { comments, id, commentsLoaded, commentsLoading}}, isOpen) {
            if (!isOpen) return null;
        if (commentsLoading) return <Loader/>;
        if (!commentsLoaded) return null;

        if (!comments.length) {
            return (
                <div>
                    <p>No comments yet</p>
                    <CommentForm articleId = {id}/>
                </div>
            );
        }

        return (
            <ul>
                {comments.map(id => <li key = {id}><Comment id = {id}/></li>)}
                <CommentForm articleId = {id}/>
            </ul>
        )
    }

}

export default connect(null, {loadComments})(toggleOpen(CommentList));