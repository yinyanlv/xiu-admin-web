import {Injectable} from '@angular/core';

import {BaseHttp} from '../../../common/base-http';
import {Observable} from 'rxjs';

@Injectable()
export class GridService extends BaseHttp {

  queryPage(queryString): Observable<any> {

    return this.http.get(encodeURI(this.apiPrefix + '/user/page' + queryString));
  }

  delete(ids) {
    return this.http.request('delete', this.apiPrefix + '/user/delete', {
      headers: {
        'Content-Type': 'application/json'
      },
      body: ids,
      withCredentials: true
    });
  }
}
