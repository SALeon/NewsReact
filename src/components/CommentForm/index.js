import React, {Component} from 'react';
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


export default class CommentForm extends Component {

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
        this.setState({
            user: 'set user name',
            text: 'set comment text',
        });
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

