import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import {loginState} from 'src/pages/Login/reducer';
import {sessionState} from 'src/store/session/reducer';
import rootSaga from './rootSaga';

const composeEnhancer =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true
    }) : compose;

const reducers = combineReducers({
    loginState,
    sessionState
});

const sagaMiddleware = createSagaMiddleware();

const enhancer = composeEnhancer(applyMiddleware(sagaMiddleware, thunk));

const store = createStore(reducers, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
