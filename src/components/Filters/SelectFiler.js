import React, { Component} from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types';
import 'react-select/dist/react-select.css';
import {connect} from "react-redux";
import {changedSelected} from "../../AC";

class SelectFilter extends Component {
    static propTypes = {
        // from store
        articles: PropTypes.array.isRequired,
        selected: PropTypes.array.isRequired,
        changedSelected: PropTypes.func.isRequired
    };

    render() {
        const { articles, selected } = this.props;

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

    handleChange = selected => this.props.changedSelected(selected.map(option => option.value));

}

export default connect( ({articles, filters: {selected} }) => ({
    selected,
    articles: Object.values(articles)
}),{changedSelected})(SelectFilter);