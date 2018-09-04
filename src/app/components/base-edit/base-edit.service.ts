import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BaseHttp} from '../../common/base-http';

@Injectable()
export class BaseEditService extends BaseHttp {

  create(params: any): Observable<any> {
    return null;
  }

  update(params: any): Observable<any> {
    return null;
  }
}
