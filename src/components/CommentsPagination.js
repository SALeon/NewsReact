import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loadAllComments} from '../AC';
import Loader from "./Loader";
import Comment from "./Comment";
import {NavLink} from "react-router-dom";

class CommentsPagination extends Component {
    static propTypes = {
        //from connect
        total: PropTypes.number,
        commentIds: PropTypes.array,
        loadAllComments: PropTypes.func,
        loading: PropTypes.bool
    };

    render () {
        const {commentIds} = this.props;
        if (!commentIds || !commentIds.length) {
            return (<Loader/>);
        }
        return (<>
            {this.getComments()}
            {this.getPaginator()}
        </>)
    }

    componentWillMount () {
        const {commentIds, loadAllComments} = this.props;
        if(!commentIds || !commentIds.length) {
            loadAllComments()
        }
    }

    componentWillReceiveProps() {

    }

    getComments = () => {
        const {commentIds} = this.props;
        return(<ul>
            {commentIds.map(id => (<li key ={id}><Comment id ={id}/></li>))}
        </ul>)
    };

    getPaginator = () => {
        const {total} = this.props;
        let items = [];
        for (let i = 1; i <= Math.floor((total - 1) / 5 ) + 1; i++) {
            items.push(<li key = {i}><NavLink to = {`/comments/${i}`} activeStyle = {{color: 'red'}}>{i}</NavLink> </li>);
        }
        return <ul>{items}</ul>;
    };
}

export default connect((state) => {
    const {pagination, total} = state.comments;
    return {
        total,
        commentIds: pagination.getIn(['ids']),
        loading: pagination.getIn(['loading'])
    }
}, {loadAllComments})(CommentsPagination);
