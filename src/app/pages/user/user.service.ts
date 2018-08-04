import {Injectable} from '@angular/core';
import {BaseHttp} from '../../common/base-http';
import {Observable} from 'rxjs';

@Injectable()
export class UserService extends BaseHttp {

  getUsers(): Observable<any> {
    return this.http.get('http://localhost:8086/user/get-users');
  }
}

