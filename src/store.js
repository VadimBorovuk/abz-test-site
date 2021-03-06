import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';

import reducers from './modules/reducers'

export default ()=>{
    const store = createStore(reducers, applyMiddleware(logger));
    return store;
}