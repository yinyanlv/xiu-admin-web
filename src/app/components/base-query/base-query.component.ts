import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {getFilters} from '../../common/utils';

@Component({
  selector: 'base-query',
  template: ''
})
export class BaseQueryComponent implements OnInit {

  form: FormGroup;

  @Output()
  onQuery: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  doQuery() {
    this.onQuery.emit(getFilters(this.form.value));
  }

  doReset() {
    this.form.reset();
  }
}
