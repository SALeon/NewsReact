import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {commentSelectorFactory} from "../selectors";

class Comment extends Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
        //from connect
        comment: PropTypes.shape({
            text: PropTypes.string.isRequired,
            user: PropTypes.string.isRequired
        }).isRequired
    };

    render() {
        const {comment} = this.props;
        return (
            <section>
                <h4>{comment.user}</h4>
                {comment.text}
            </section>
        );
    }
}


const mapStateToProps = () => {
    const commentSelector = commentSelectorFactory();// add each selector in closure

    return (state, ownProps) => {
        return {
            comment: commentSelector(state, ownProps)
        }
    };
};

export default connect(mapStateToProps)(Comment)