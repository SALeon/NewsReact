import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';
import CommentsPagination from '../CommentsPagination';

class CommentsPage extends Component {
    static propTypes = {
        match : PropTypes.object.isRequired
    };

    render () {
        const {isExact} = this.props.match;

        if (isExact) {
            return (<>
                        <Redirect to = '/comments/1'/>
                    </>);
        }

        return( <>
                    <Route path = '/comments/:page' render = {this.getComments} />
                </>);
    }

    getComments = ({match}) => {
        console.log(match);
        return <CommentsPagination page = {match.params.page}/>
    };

}

export default CommentsPage;
