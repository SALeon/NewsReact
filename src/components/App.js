import React, {Component} from 'react';
import Articles from './routes/Articles';
import Filters from './Filters';
import Counter from './Counter';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';

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
                    </>
                    <Route path ='/counter' component = {Counter}/>
                    <Route path = '/filters' component = {Filters}/>
                    <Route path = '/articles' component = {Articles}/>
                </>
            </Router>
        )
    }

}