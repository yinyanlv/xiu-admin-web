import {Injectable} from '@angular/core';

import {BaseHttp} from '../../../common/base-http';
import {Observable} from 'rxjs';

@Injectable()
export class ModifyPasswordService extends BaseHttp {

  modify(params: any): Observable<any> {

    return this.http.put(this.apiPrefix + '/user/modify-password', params, {
      withCredentials: true
    });
  }
}
