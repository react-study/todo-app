import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import Todo from './Todo';

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={App} filter="All" />
      <Route path="/active" component={Todo} filter="Active" />
      <Route path="/done" component={Todo} filter="Done" />
    </Route>
  </Router>,
  document.getElementById('root')
);