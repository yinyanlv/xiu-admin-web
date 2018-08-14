import {Injectable} from '@angular/core';

import {BaseHttp} from '../common/base-http';

@Injectable()
export class SelectService extends BaseHttp {

  getUserRoles() {

    return this.http.get(this.apiPrefix + '/combo-box/user-role/list');
  }

  getUserStatuses() {

    return this.http.get(this.apiPrefix + '/combo-box/user-status/list');
  }
}
