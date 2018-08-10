import {Injectable} from '@angular/core';
import {BaseHttp} from '../../common/base-http';
import {Observable} from 'rxjs';

@Injectable()
export class UserService extends BaseHttp {

  queryPage(queryString): Observable<any> {

    return this.http.get(encodeURI(this.apiPrefix + '/user/page' + queryString));
  }
}

