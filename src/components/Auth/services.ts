import axios from 'axios';
import {jwtService} from 'src/services/jwtService';
import {API_PREFIX} from 'src/config';

export function loginWithAccessToken() {
    return new Promise((resolve, reject) => {
        axios.get(API_PREFIX + '/access-token', {
            data: {
                accessToken: jwtService.getAccessToken()
            }
        })
            .then((res) => {
                const data = res.data;

                if (data.success) {
                    resolve(data.result);
                } else {
                    reject(new Error(data.message));
                }
            })
            .catch((err) => {
                reject(new Error('Network error!'));
            });
    });
}

export function logout() {

}
