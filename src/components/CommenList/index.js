import React, {Component} from 'react';
import Comment from '../Comment';
import toggleOpen from '../../decorators/toggleOpen';
import './style.css'

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

    state = {
        user: 'set user name',
        text: 'set comment text',
    };


    render() {
        const {isOpen, toggleOpen} = this.props;
        const {user, text} = this.state;
        return (
            <div>
                <button onClick={toggleOpen}>
                    {isOpen ? 'Hide comment' : 'View comment'}
                </button>
                {this.getBody()}
                <form>
                    <label>
                        Add comment:
                        <label>User: <input
                            className = {this.getClassName('user')}
                            name = 'user'
                            value = {user}
                            onChange = {this.handleChange}/>
                        </label>
                        <label>Text: <textarea
                            className = {this.getClassName('text')}
                            name = 'text'
                            value = {text}
                            onChange = {this.handleChange}/>
                        </label>
                    </label>
                </form>
            </div>
        );
    }

    getBody() {
        if (!this.props.isOpen) return null;

        const {comments} = this.props;
        if (!comments.length) return <p>No comments yet</p>;

        const commentList = comments.map((comment) =>
            <li key={comment.id}>
                <Comment comment={comment}/>
            </li>);
        return (
            <ul>
                {commentList}
            </ul>
        )
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    getClassName(type) {

        return this.state[type].length < limits[type].min
            || this.state[type].length > limits[type].max
            ? 'form-input__error' : '';
    }
}

export default toggleOpen(Index);