import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import App from './App';

render(
    <Router history={browserHistory}>
        <Route path="/(:filter)" component={App} />
    </Router>
    , document.getElementById('root')
);
