import {call, put, takeLatest} from 'redux-saga/effects';
import history from 'src/history';
import * as actions from './actions';
import {sessionActionCreator} from 'src/store/session/actions';
import * as services from './services';

function* doLogin(action) {
    try {
        const result = yield call(services.doLogin, action.payload);

        yield put(sessionActionCreator.setSession(result));

        history.push('/dashboard');
    } catch (err) {
        yield put(actions.loginActionCreator.failed(err.message));
    }
}

export function *loginSaga() {
    yield takeLatest(actions.DO_LOGIN, doLogin);
}

