import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {increment} from '../AC'

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
        this.props.increment();
    };
}

function mapStateToProps(state) {
    return {
        counter: state.count
    }
}
//second parameter inside connect is object with AC witch connect to "store.dispatch" method
const mapToDispatch = {increment};

//connect has inside method "dispatch"
//first parameter object store, second parameter object to dispatch
const decorator = connect(mapStateToProps, mapToDispatch);

// export default Counter;
export default decorator(Counter);