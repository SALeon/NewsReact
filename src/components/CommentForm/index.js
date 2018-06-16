import React, {Component} from 'react';
import './style.css';
import PropTypes from 'prop-types';

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


const DEFAULT_USER_TEXT = 'set user name';
const DEFAULT_COMMENT_TEXT = 'set comment text';

export default class CommentForm extends Component {

    static propTypes = {
        // from props
        addComment: PropTypes.func.isRequired
    };

    static defaultProps = {
        comments: []
    };

    state = {
        user: 'set user name',
        text: 'set comment text',
    };

    render() {
        const {user, text} = this.state;
        return (
                <form onSubmit={this.handleSubmit}>
                    User: <input
                    className={this.getClassName('user')}
                    // name = 'user'
                    value={user}
                    onChange={this.handleChange('user')}/>
                    Text: <textarea
                    className={this.getClassName('text')}
                    // name = 'text'
                    value={text}
                    onChange={this.handleChange('text')}/>
                    <input type = 'submit' value = 'submit'/>
                </form>
        );
    }


    handleSubmit = event => {
        event.preventDefault();

        const {user, text} = this.state;

        if (user !== DEFAULT_USER_TEXT && text !== DEFAULT_COMMENT_TEXT) {
            this.props.addComment(user, text);

            this.setState({
                              user: DEFAULT_USER_TEXT,
                              text: DEFAULT_COMMENT_TEXT,
                          });
        }
    };


    handleChange = type => event => {
        const {value} = event.target;
        if (value.length > limits[type].max) return;
        this.setState({
            [type]: value
        })
    };

    getClassName(type) {

        return this.state[type].length < limits[type].min
        || this.state[type].length > limits[type].max
            ? 'form-input__error' : '';
    }
}

