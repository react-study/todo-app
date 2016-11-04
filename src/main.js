import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import Todo from './Todo';

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/active" component={Todo} />
      <Route path="/done" component={Todo} />
    </Route>
  </Router>,
  document.getElementById('root')
);