import React, {Component} from 'react';
import ArticleList from '../components/ArticleList';
import {articles} from "../fixtures";
import Filters from './Filters';
import 'react-day-picker/lib/style.css';

export default class App extends Component {

    render() {

        return (
            <div>
                <Filters articles = {articles}/>
                <ArticleList articles = {articles} defaultOpenId = {articles[0].id}/>
            </div>
        )
    }

}