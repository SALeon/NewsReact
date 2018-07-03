import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loadAllComments} from '../AC';
import {arrToMap, mapToArr} from "../helpers";
import Loader from "./Loader";
import Comment from "./Comment";

class CommentsPagination extends Component {
    static propTypes = {
        //from connect
        commentIds: PropTypes.array,
        loadAllComments: PropTypes.func,
        loading: PropTypes.bool
    };

    render () {
        const {commentIds} = this.props;
        if (!commentIds || !commentIds.length) {
            return (<Loader/>);
        }
        return (this.getComments());
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

}


export default connect((state) => {
    const {pagination} = state.comments;
        return {
    commentIds: pagination.getIn(['ids']),
    loading: pagination.getIn(['loading'])
}
}, {loadAllComments})(CommentsPagination);
