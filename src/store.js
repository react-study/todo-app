import { createStore, compose, applyMiddleware } from 'redux';
import TodoReducer from './reducers/TodoReducer';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(
    TodoReducer,
    compose(
        applyMiddleware(thunk, logger({ collapsed: true })),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default store;
