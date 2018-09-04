import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {BaseEditService} from '../../../components/base-edit/base-edit.service';

@Injectable()
export class EditService extends BaseEditService {

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
