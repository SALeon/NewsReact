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
                </h2>
                <button onClick={this.handleIncrement}>Increment me</button>
            </div>
        );
    }

    handleIncrement = () => {
        this.props.dispatch({
            type: 'INCREMENT'
        })
    };
}

function mapStateToProps(state) {
    return {
        counter: state.count
    }
}

//connect has inside method "dispatch"
const decorator = connect(mapStateToProps);

// export default Counter;
export default decorator(Counter);