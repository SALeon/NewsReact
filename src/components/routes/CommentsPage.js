import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
import CommentsPagination from '../CommentsPagination';

class CommentsPage extends Component {
    static propTypes = {};

    render () {
        return (
            <>
                <Route path = '/comments' render = {this.getComments}/>
            </>
        )
    }

    getComments = () => {
        return <CommentsPagination/>
    };

}

export default CommentsPage;
