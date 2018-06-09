import React, {Component} from 'react';
import Comment from '../Comment';
import toggleOpen from '../../decorators/toggleOpen';
import '../CommentForm/style.css'
import CommentForm from "../CommentForm";

const limits = {
    user: {
        min: 5,
        max: 15
    },
    text: {
        min: 20,
        max: 50
    }
};


class Index extends Component {

    static defaultProps = {
        comments: []
    };

    render() {
        const {isOpen, toggleOpen} = this.props;
        return (
            <div>
                <button onClick={toggleOpen}>
                    {isOpen ? 'Hide comment' : 'View comment'}
                </button>
                {this.getBody()}
                <CommentForm/>
            </div>
        );
    }

    getBody() {
        if (!this.props.isOpen) return null;

        const {comments} = this.props;
        if (!comments.length) return <p>No comments yet</p>;

        const commentList = comments.map((comment) =>
            <li key = {comment.id}>
                <Comment comment={comment}/>
            </li>);
        return (
            <ul>
                {commentList}
            </ul>
        )
    }

}

export default toggleOpen(Index);