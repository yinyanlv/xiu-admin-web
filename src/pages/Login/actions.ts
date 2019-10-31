import axios from 'axios';
import {API_PREFIX} from 'src/config';
import history from 'src/history';

export const AUTHORIZED = 'login:authorized';

export function doLogin(params) {
    return (dispatch) => {
        axios.post(API_PREFIX + '/login', params)
            .then((res) => {
                console.log(res);
                if (res.data.success) {
                    history.push('/');
                }
            });
    };
}