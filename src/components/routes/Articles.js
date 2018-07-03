import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticleList from '../ArticleList';
import Article from '../Artcile'
import {Route} from 'react-router-dom';

class Articles extends Component {
    static propTypes = {};

    render () {
        return (
            <>
                <ArticleList/>
                <Route path = '/articles' render = {this.getIndex} exact/>
                <Route path = '/articles/:id' render = {this.getArticle}/>
            </>
        )
    }

    getArticle = ({match}) => {
        const {id} = match.params;
        return <Article id = {id} isView key = {id}/>
    };

    getIndex = () => {
        return <h2>Please select article</h2>
    };
}

export default Articles;
