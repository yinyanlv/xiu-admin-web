import {createAction} from 'src/utils/createAction';

export const DO_LOGIN = 'login:do-login';
export const LOGIN_FAILED = 'login:login-failed';

export const loginActionCreator = {
    request: params => createAction(DO_LOGIN, params),
    failed: message => createAction(LOGIN_FAILED, message)
};
