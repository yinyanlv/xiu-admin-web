import axios from 'axios';
import {API_PREFIX} from 'src/config';

export function doLogin(params) {
    return new Promise((resolve, reject) => {
        axios.post(API_PREFIX + '/login', params)
            .then((res) => {
                const data = res.data;

                if (data.success) {
                    resolve(data.result);
                } else {
                    reject(new Error(data.message));
                }
            })
            .catch(() => {
                reject(new Error('Network error!'));
            });
    });
}
