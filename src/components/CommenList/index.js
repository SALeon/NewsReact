import React, {Component} from 'react';
import Comment from '../Comment';
import toggleOpen from '../../decorators/toggleOpen';
import '../CommentForm/style.css'
import CommentForm from "../CommentForm";
import PropTypes from 'prop-types';
import {setComment, loadCommits} from "../../AC";
import {connect} from "react-redux";
import Loader from "../Loader";
import {mapToArr} from "../../helpers";

class CommentList extends Component {

    static propTypes = {
        // from props
        articleId: PropTypes.string.isRequired,

        // from connect
        comments: PropTypes.array,
        loading: PropTypes.bool.isRequired,
        loaded: PropTypes.bool.isRequired,
        setComment: PropTypes.func.isRequired,
        loadCommits: PropTypes.func.isRequired
    };

    static defaultProps = {
        comments: []
    };

    componentDidMount() {
        const {loaded, loading, loadCommits, articleId} = this.props;
        if (!loaded || !loading) {
            loadCommits(articleId);
        }
    }

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

    componentWillReceiveProps({isOpen, loadCommits, articleId}) {

    }

    getBody() {
        const {isOpen, loading, comments} = this.props;
        if (!isOpen) return null;
        if (loading) return <Loader/>;

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

export default connect(({comments}) =>
        ({
            comments: mapToArr(comments.entities),
            loaded: comments.loaded,
            loading: comments.loading
        })
    , {setComment, loadCommits})(toggleOpen(CommentList));