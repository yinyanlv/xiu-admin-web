import {all, fork} from 'redux-saga/effects';
import {authSaga} from 'src/components/Auth/saga';
import {loginSaga} from 'src/pages/Login/saga';

function* rootSaga() {
    yield all([
        fork(authSaga),
        fork(loginSaga)
    ]);
}

export default rootSaga;

