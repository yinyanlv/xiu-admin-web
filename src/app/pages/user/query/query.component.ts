import {Component, OnInit, EventEmitter, Output, ChangeDetectionStrategy} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {getFilters} from '../../../common/utils';
import {SelectService} from '../../../services/select.service';

@Component({
  selector: 'user-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueryComponent implements OnInit {

  form: FormGroup;
  roles: Array<any>;
  statuses: Array<any>;

  @Output()
  onQuery: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private selectService: SelectService
  ) {
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

  doQuery() {

    this.onQuery.emit(getFilters(this.form.value));
  }

  doReset() {
    this.form.reset();
  }
}
