import React, {Component} from 'react';
import ArticleList from '../components/ArticleList';
import Filters from './Filters';
import Counter from './Counter';

export default class App extends Component {

    render() {

        return (
            <div>
                <Counter/>
                <Filters articles = {[]}/>
                <ArticleList/>
            </div>
        )
    }

}