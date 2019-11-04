import {all, fork} from 'redux-saga/effects';
import {loginSaga} from 'src/pages/Login/saga';

function* rootSaga() {
    yield all([
        fork(loginSaga)
    ]);
}

export default rootSaga;

