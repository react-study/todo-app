import React from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

import Container from './Container';
import { Home, About, Name, Portfolio } from './Components';

const App = () => (
    <Router history={browserHistory}>
        <Route path="/" component={Container}>
            <IndexRoute component={Home} />
            <Route path="about" component={About}>
                <Route path="name" component={Name} />
                <Route path="redirect0"
                    onEnter={(nextState, replace) => replace('/portfolio/0')}
                />
                <Redirect from="redirect1" to="/portfolio/1" />
            </Route>
            <Route path="portfolio(/:id)" component={Portfolio} />
        </Route>
    </Router>
);

export default App;
