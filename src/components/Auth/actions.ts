import {createAction} from 'src/utils/createAction';

export const LOGIN_WITH_ACCESS_TOKEN = 'auth:login-with-access-token';
export const LOGOUT = 'auth:logout';

export const authActionCreator = {
    loginWithAccessToken: () => createAction(LOGIN_WITH_ACCESS_TOKEN),
    logout: () => createAction(LOGOUT)
};
