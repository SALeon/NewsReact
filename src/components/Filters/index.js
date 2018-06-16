import React, {Component} from 'react';
import DataRange from './DataRange';
import SelectFilter from './SelectFiler'
import PropTypes from 'prop-types';
import {connect} from "react-redux";

class Filters extends Component {


    render() {

        return (
            <div>
                <SelectFilter />
                <DataRange />
            </div>
        )
    }
}

export default Filters;