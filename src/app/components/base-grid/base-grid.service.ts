import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BaseHttp} from '../../common/base-http';

@Injectable()
export class BaseGridService extends BaseHttp {

  queryPage(queryString: string): Observable<any> {
    return null;
  }

  delete(ids: any[]): Observable<any> {
    return null;
  }
}
