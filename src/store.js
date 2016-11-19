import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import bankReducer from './reducers/bankReducer';
import tabReducer from './reducers/tabReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    bank: bankReducer,
    tab: tabReducer
});

const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk, logger({ collapsed: true })),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default store;
