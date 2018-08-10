import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NzMessageService} from 'ng-zorro-antd';
import {Observable} from 'rxjs';

import {environment} from '../../environments/environment';

@Injectable()
export class BaseHttp {

  protected apiPrefix: String = '';
  protected observableCreator = Observable;

  constructor(
    protected http: HttpClient,
    protected messageService: NzMessageService
  ) {
    this.apiPrefix = environment.apiPrefix;
  }

  showError(message: string, callback?: Function) {

    if (message) {

      this.messageService.error(message);
    }
  }
}
