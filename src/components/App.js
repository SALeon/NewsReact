import React, {Component} from 'react';
import ArticleList from '../components/ArticleList';
import {articles} from "../fixtures";
import Filters from './Filters';
import Counter from './Counter';

export default class App extends Component {

    render() {

        return (
            <div>
                <Counter />
                <Filters articles = {articles}/>
                <ArticleList articles = {articles} defaultOpenId = {articles[0].id}/>
            </div>
        )
    }

}