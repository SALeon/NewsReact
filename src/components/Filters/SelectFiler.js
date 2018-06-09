import React, { Component} from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types';
import 'react-select/dist/react-select.css';

export default class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        selected: []
    };

    handleChange = selected => this.setState({selected});

    render() {
        const { articles } = this.props;
        const { selected } = this.state;

        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }));

        return <Select
            options={options}
            value={selected}
            multi={true}
            onChange={this.handleChange}
        />
    }
}