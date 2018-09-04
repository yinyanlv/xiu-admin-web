import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NzMessageService} from 'ng-zorro-antd';
import {environment} from '../../environments/environment';

@Injectable()
export class BaseHttp {

  protected apiPrefix: String = '';

  constructor(
    protected http: HttpClient,
    protected messageService: NzMessageService
  ) {
    this.apiPrefix = environment.apiPrefix;
  }

  showSuccess(message: string, callback?: Function) {

    if (message) {

      this.messageService.success(message);
    }
  }

  showError(message: string, callback?: Function) {

    if (message) {

      this.messageService.error(message);
    }
  }
}
