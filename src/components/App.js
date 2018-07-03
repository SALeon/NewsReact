import React, {Component} from 'react';
import Articles from './routes/Articles';
import Filters from './Filters';
import Counter from './Counter';
import {BrowserRouter as Router, Switch ,Route, NavLink} from 'react-router-dom';
import NewArticle from './routes/NewArticle';
import NotFound from './routes/NotFound';
import CommentsPage from './routes/CommentsPage';

export default class App extends Component {

    render () {
        return (
            <Router>
                <>
                    <>
                        <h2>Main menu</h2>
                        <div><NavLink activeStyle = {{color: "red"}} to = '/counter'>Counter</NavLink></div>
                        <div><NavLink activeStyle = {{color: "red"}} to = '/filters'>Filters</NavLink></div>
                        <div><NavLink activeStyle = {{color: "red"}} to = '/articles'>Articles</NavLink></div>
                        <div><NavLink activeStyle = {{color: "red"}} to = '/comments'>Comments</NavLink></div>
                    </>
                    <Switch>
                        <Route path = '/counter' component = {Counter}/>
                        <Route path = '/filters' component = {Filters}/>
                        <Route path = '/articles/new' component = {NewArticle}/>
                        <Route path = '/articles' component = {Articles}/>
                        <Route path = '/comments' component = {CommentsPage}/>
                        <Route path = '*' component = {NotFound}/>
                    </Switch>
                </>
            </Router>
        )
    }

}