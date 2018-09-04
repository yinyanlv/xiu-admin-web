import {Component, OnInit, EventEmitter, Output, ChangeDetectionStrategy} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {SelectService} from '../../../services/select.service';
import {BaseQueryComponent} from '../../../components/base-query/base-query.component';

@Component({
  selector: 'user-query',
  templateUrl: './query.component.html',
  styleUrls: ['../../../components/base-query/base-query.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserQueryComponent extends BaseQueryComponent implements OnInit {

  roles: Array<any>;
  statuses: Array<any>;

  constructor(
    private fb: FormBuilder,
    private selectService: SelectService
  ) {
    super();
  }

  ngOnInit() {

    this.selectService.getUserRoles().subscribe((res: any) => {
      const list = res.data;
      list.unshift({
        code: '',
        name: '全部'
      });
      this.roles = list;
    });

    this.selectService.getUserStatuses().subscribe((res: any) => {
      const list = res.data;
      list.unshift({
        code: '',
        name: '全部'
      });
      this.statuses = list;
    });

    this.form = this.fb.group({
      username: [null],
      nickname: [null],
      role: [null],
      status: [null],
      email: [null],
      phone: [null],
      qq: [null],
      lastLoginTime: [null]
    });
  }
}
