import { createStore } from 'redux';
import bankReducer from './reducers/bankReducer';
const store = createStore( bankReducer );

export default store;
