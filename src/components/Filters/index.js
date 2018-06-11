import React, {Component} from 'react';
import DataRange from './DataRange';
import SelectFilter from './SelectFiler'
import PropTypes from 'prop-types';
import {connect} from "react-redux";

class Filters extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    render() {
        const {articles} = this.props;
        return (
            <div>
                <SelectFilter articles = {articles}/>
                <DataRange articles = {articles}/>
            </div>
        )
    }
}

export default connect(state => ({
    articles: state.articles
}))(Filters);