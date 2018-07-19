import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {checkAndLoadCommentsForPage} from '../AC';
import Loader from "./Loader";
import Comment from "./Comment";
import {NavLink} from "react-router-dom";

class CommentsPagination extends Component {
    static propTypes = {
        //from props
        page:PropTypes.string.isRequired,
        //from connect
        total: PropTypes.number,
        commentIds: PropTypes.array,
        checkAndLoadCommentsForPage: PropTypes.func,
        loading: PropTypes.bool

    };

    render () {
        const {commentIds} = this.props;
        if (!commentIds || !commentIds.length) {
            return (<Loader/>);
        }
        return (
            <>
                {this.getComments()}
                {this.getPagination()}
            </>
        )
    }

    componentWillMount() {
        this.props.checkAndLoadCommentsForPage(this.props.page)
    }

    componentWillReceiveProps({page, checkAndLoadCommentsForPage}) {
        checkAndLoadCommentsForPage(page);
    }

    getComments = () => {
        const {commentIds, loading} = this.props;
        if (loading || !commentIds) {
            return <Loader/>
        }
        // const commentsGroup = commentIds.map
        return(<ul>
            {commentIds.map(id => (<li key ={id}><Comment id ={id}/></li>))}
        </ul>)
    };

    getPagination = () => {
        const {total} = this.props;
        let items = [];
        for (let i = 1; i <= Math.floor((total - 1) / 5 ) + 1; i++) {
            items.push(<li key = {i}><NavLink to = {`/comments/${i}`} activeStyle = {{color: 'red'}}>{i}</NavLink></li>);
        }
        return <ul>{items}</ul>;
    };
}

export default connect((state, {page}) => {
    const {pagination, total} = state.comments;
    return {
        total,
        commentIds: pagination.getIn([page, 'ids']),
        loading: pagination.getIn([page, 'loading'])
    }
}, {checkAndLoadCommentsForPage})(CommentsPagination);
