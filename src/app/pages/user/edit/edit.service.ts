import {Injectable} from '@angular/core';

import {BaseHttp} from '../../../common/base-http';
import {Observable} from 'rxjs';

@Injectable()
export class EditService extends BaseHttp {

  create(params: any): Observable<any> {

    return this.http.post(this.apiPrefix + '/user/create', params, {
      withCredentials: true
    });
  }

  update(params: any): Observable<any> {

    return this.http.put(this.apiPrefix + '/user/update', params, {
      withCredentials: true
    });
  }
}
