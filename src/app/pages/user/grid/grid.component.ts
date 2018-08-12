import {Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {getPagination, getQueryParams, getSorts} from '../../../common/utils';

import {GridService} from './grid.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'user-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  providers: [
    GridService
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent implements OnInit {

  allChecked: boolean = false;
  indeterminate: boolean = false;
  checkedLength: number = 0;
  isShowEdit: boolean = false;
  isShowDelete: boolean = false;
  size: number = 20;
  data: any;

  @Input()
  data$: Observable<any>;

  @Output()
  onCreate: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onUpdate: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private cdRef: ChangeDetectorRef,
    private gridService: GridService
  ) {
  }

  ngOnInit() {

    this.data$.subscribe((data) => {

      this.query(data);
    });
  }

  query(filters) {

    let params = getQueryParams(filters, getSorts(), getPagination(1));

    this.gridService.queryPage(params).subscribe((res) => {

      this.data = res;
      this.cdRef.markForCheck();
    }, (res: any) => {
      this.gridService.showError(res.message);
    });
  }

  create() {

    this.onCreate.emit();
  }

  update() {

    this.onUpdate.emit(this.getCheckedRows()[0]);
  }

  checkAll(isChecked) {

    this.data && this.data.list && this.data.list.forEach((item) => {

      item.checked = isChecked;
    });

    this.refreshStatus();
  }

  checkRow(isChecked, record) {
    record.checked = isChecked;
    this.refreshStatus();
  }

  refreshStatus() {

    const list = this.data && this.data.list && this.data.list || [];

    const allChecked = list.every((item) => {
      return !!item.checked;
    });

    const allUnchecked = list.every((item) => {
      return !item.checked;
    });

    this.allChecked = allChecked;
    this.indeterminate = !allChecked && !allUnchecked;
    this.checkedLength = list.filter((item) => {
      return item.checked;
    }).length;
    this.isShowEdit = this.checkedLength === 1;
    this.isShowDelete = this.checkedLength > 0;

    this.cdRef.markForCheck();
  }

  delete() {
    const ids = this.getCheckedRows().map((item) => {
      return item.id;
    });

    this.gridService.delete(ids).subscribe(() => {
    });
  }

  getCheckedRows() {

    this.data && this.data.list && this.data.list.forEach((item) => {
      return item.checked;
    });

    return this.data.list;
  }
}
