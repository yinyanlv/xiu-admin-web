import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const composeEnhancer =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true
    }) : compose;

const reducers = combineReducers({

});

const enhancer = composeEnhancer(applyMiddleware(thunk));

const store = createStore(reducers, enhancer);

export default store;
