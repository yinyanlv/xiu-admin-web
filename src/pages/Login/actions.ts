export const DO_LOGIN = 'login:do-login';
export const LOGIN_FAILED = 'login:login-failed';

function createAction(type, payload = {}) {
    return {
        type,
        payload
    };
}

export const loginActionCreator = {
    request: params => createAction(DO_LOGIN, params),
    failed: message => createAction(LOGIN_FAILED, message)
};
