import axios from 'axios';
import jwtDecode from 'jwt-decode';
import {EventEmitter} from 'src/utils/EventEmitter';

class JwtService extends EventEmitter {

    private _storageKey = 'jwt_access_token';
    private _headersAuthorizeKey = 'Authorization';

    init() {
        this._setInterceptors();
        this._authorize();
    }

    private _setInterceptors() {
        axios.interceptors.request.use((res) => {
            return res;
        }, (err) => {
            return new Promise((resolve, reject) => {
                if (err.response.status === 401) {
                    this.emit('unauthorized', 'Invalid jwt access token!');
                    this.removeAccessToken();
                }
            });
        });
    }

    private _authorize() {
        const accessToken = this.getAccessToken();

        if (!accessToken) {
            return;
        }

        if (this._isAccessTokenValid(accessToken)) {
            this.setAccessToken(accessToken);
            this.emit('authorized');
        } else {
            this.removeAccessToken();
            this.emit('unauthorized', 'Invalid jwt access token!');
        }
    }

    private _isAccessTokenValid(accessToken: string) {

        if (!accessToken) {
            return false;
        }

        const decoded: any = jwtDecode(accessToken);
        const current = Date.now() / 1000;
        if (decoded.exp < current) {
            console.warn('jwt access token is expired!');
            return false;
        } else {
            return true;
        }
    }

    private setAccessToken(accessToken: string): void {
        localStorage.setItem(this._storageKey, accessToken);
        axios.defaults.headers.common[this._headersAuthorizeKey] = `Bearer ${accessToken}`;
    }

    removeAccessToken() {
        localStorage.removeItem(this._storageKey);
        delete axios.defaults.headers.common[this._headersAuthorizeKey];
    }

    getAccessToken() {
        return localStorage.getItem(this._storageKey);
    }
}

export const jwtService = new JwtService();
