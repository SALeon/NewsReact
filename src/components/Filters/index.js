import React, {Component} from 'react';
import DataRange from './DataRange';
import SelectFilter from './SelectFiler'
import PropTypes from 'prop-types';

export default class Filters extends Component {
    static propTypes={
        articles: PropTypes.array.isRequired
    };

    render() {
        return (
            <div>
                <SelectFilter articles={this.props.articles}/>
                <DataRange/>
            </div>
        )
    }

}