import {put, call, takeEvery} from 'redux-saga/effects';
import {LOGIN_WITH_ACCESS_TOKEN, LOGOUT} from './actions';
import {loginWithAccessToken} from './services';
import history from 'src/history';
import {jwtService} from 'src/services/jwtService';
import {sessionActionCreator} from 'src/store/session/actions';

function* doLogin() {
    const result = yield call(loginWithAccessToken);
    yield put(sessionActionCreator.setSession(result));
    history.push('/dashboard');
}

function* logout() {
    jwtService.removeAccessToken();
    yield put(sessionActionCreator.removeSession());
    history.push('/login');
}

export function* authSaga() {
    yield takeEvery(LOGIN_WITH_ACCESS_TOKEN, doLogin);
    yield takeEvery(LOGOUT, logout);
}
