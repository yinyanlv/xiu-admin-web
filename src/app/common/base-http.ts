import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../environments/environment';

@Injectable()
export class BaseHttp {

  protected apiPrefix: String = '';
  protected observableCreator = Observable;

  constructor(
    public http: HttpClient,
  ) {
    this.apiPrefix = environment.apiPrefix;
  }

  showMessage(message: string, callback?: Function) {

    if (message) {

      let fn = callback ? () => {
        callback();
      } : null;

      // TODO
    }
  }
}
