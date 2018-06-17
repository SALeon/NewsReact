import React, {Component} from 'react';
import Comment from '../Comment';
import toggleOpen from '../../decorators/toggleOpen';
import '../CommentForm/style.css'
import CommentForm from "../CommentForm";
import PropTypes from 'prop-types';
import {setComment} from "../../AC";
import {connect} from "react-redux";

class CommentList extends Component {

    static propTypes = {
        // from props
        articleId: PropTypes.string.isRequired,

        // from connect
        comments: PropTypes.array,
        setComment: PropTypes.func.isRequired
    };

    static defaultProps = {
        comments: []
    };

    render() {
        const {isOpen, toggleOpen, articleId} = this.props;
        return (
            <div>
                <button onClick={toggleOpen}>
                    {isOpen ? 'Hide comment' : 'View comment'}
                </button>
                {this.getBody()}
                <CommentForm addComment = {this. addComment(articleId)}/>
            </div>
        );
    }

    getBody() {
        if (!this.props.isOpen) return null;

        const {comments} = this.props;
        if (!comments.length) return <p>No comments yet</p>;

        const commentList = comments.map((comment) =>
            <li key = {comment.id}>
                <Comment id = {comment.id}/>
            </li>);
        return (
            <ul>
                {commentList}
            </ul>
        )
    }

    addComment = (articleId) => (comment) => {
        this.props.setComment(comment, articleId);
    }

}

export default connect( ({comments}) => ({comments: Object.values(comments)})
    , {setComment})(toggleOpen(CommentList));