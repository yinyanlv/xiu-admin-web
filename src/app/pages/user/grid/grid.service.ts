import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {BaseGridService} from '../../../components/base-grid/base-grid.service';

@Injectable()
export class GridService extends BaseGridService {

  queryPage(queryString): Observable<any> {

    return this.http.get(encodeURI(this.apiPrefix + '/user/page' + queryString));
  }

  delete(ids): Observable<any> {
    return this.http.request('delete', this.apiPrefix + '/user/delete', {
      headers: {
        'Content-Type': 'application/json'
      },
      body: ids,
      withCredentials: true
    });
  }
}
