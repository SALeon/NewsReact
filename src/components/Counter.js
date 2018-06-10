import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Counter extends Component {
    static propTypes = {
        counter: PropTypes.number
    };

    render(){
        return (
            <div>
                <h2>
                    {this.props.counter}
                    <button onClick={this.handleIncrement}>Increment me</button>
                </h2>
            </div>
        );
    }

    handleIncrement = () => {

    };
}

function mapStateToProps(state) {
    return {
        counter: state.count
    }
}

const decorator = connect(mapStateToProps);

export default decorator(Counter);