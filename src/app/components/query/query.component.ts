import {Component, OnInit, EventEmitter, Output, ChangeDetectionStrategy} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {getFilters} from '../../common/utils';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueryComponent implements OnInit {

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
