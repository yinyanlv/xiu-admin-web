import axios from 'axios';
import {API_PREFIX} from 'src/config';
import history from 'src/history';

export const DO_LOGIN = 'login:do-login';
export const LOGIN_FAILED = 'login:login-failed';

export function doLogin(params) {
    return (dispatch) => {

        dispatch({
            type: DO_LOGIN
        });

        axios.post(API_PREFIX + '/login', params)
            .then((res) => {
                if (res.data.success) {
                    history.push('/');
                } else {
                    dispatch({
                        type: LOGIN_FAILED,
                        payload: res.data.message
                    });
                }
            });
    };
}