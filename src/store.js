import { createStore, combineReducers } from 'redux';
import bankReducer from './reducers/bankReducer';
import tabReducer from './reducers/tabReducer';

const reducers = combineReducers({
    bank: bankReducer,
    tab: tabReducer
});

const store = createStore( reducers );

export default store;
