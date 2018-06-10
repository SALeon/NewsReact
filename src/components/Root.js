import React from 'react';
import App from "./App";
import store from '../store';
import {Provider} from 'react-redux';

function Root() {
    return (
        <div>
            <Provider store = {store}>
                <App/>
            </Provider>
        </div>
    )
}

Root.propTypes = {};

export default Root;