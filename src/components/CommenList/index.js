import React, {Component} from 'react';
import Comment from '../Comment';
import toggleOpen from '../../decorators/toggleOpen';
import '../CommentForm/style.css'
import CommentForm from "../CommentForm";

class CommentList extends Component {

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

        const commentList = comments.map((id) =>
            <li key = {id}>
                <Comment id={id}/>
            </li>);
        return (
            <ul>
                {commentList}
            </ul>
        )
    }

}

export default toggleOpen(CommentList);