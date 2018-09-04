import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';

import {getPagination, getQueryParams, getSorts} from '../../common/utils';
import {BaseGridService} from './base-grid.service';

@Component({
  selector: 'base-grid',
  template: ''
})
export class BaseGridComponent implements OnInit {

  allChecked: boolean = false;
  isEnableEdit: boolean = false;
  isEnableDelete: boolean = false;
  isLoading: boolean = false;
  pageIndex: number = 1;
  size: number = 10;
  total: number = 0;
  list: Array<any> = [];
  protected sorts: Array<any> = [];
  protected filters: Array<any> = [];

  @Input()
  data$: Observable<any>;

  @Output()
  onCreate: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onUpdate: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    protected gridService: BaseGridService
  ) {
  }

  ngOnInit() {

    this.data$.subscribe((data) => {
      this.query(data);
    });
  }

  query(filters) {
    this.filters = filters;
    this.doQuery();
  }

  sortChange(sort) {
    this.sorts = getSorts(sort);
    this.doQuery();
  }

  pageIndexChange(index) {
    this.pageIndex = index;

    if (this.pageIndex) {
      this.doQuery();
    } else {  // 初始化组件时，index默认传入0
      this.pageIndex = 1;
    }
  }

  pageSizeChange(size) {
    this.size = size;
    this.doQuery();
  }

  doQuery() {
    const params = getQueryParams(this.filters, this.sorts, getPagination(this.pageIndex, this.size));

    this.isLoading = true;

    this.gridService.queryPage(params).subscribe((res) => {

      this.list = res.list || [];
      this.total = res.total || 0;

      this.refreshStatus();
    }, (res: any) => {
      this.gridService.showError(res.message);
    }, () => {
      this.isLoading = false;
    });
  }

  create() {

    this.onCreate.emit();
  }

  update() {

    this.onUpdate.emit(this.getCheckedRows()[0]);
  }

  delete() {
    const ids = this.getCheckedRows().map((item) => {
      return item.id;
    });

    this.gridService.delete(ids).subscribe((res: any) => {

      this.gridService.showSuccess(res.data);
      this.doQuery();
    });
  }

  checkAll(isChecked) {

    this.list.forEach((item) => {

      item.checked = isChecked;
    });

    this.refreshStatus();
  }

  checkRow(isChecked, row) {
    row.checked = isChecked;

    this.refreshStatus();
  }

  refreshStatus() {

    this.allChecked = this.list.every((item) => {
      return !!item.checked;
    });

    const checkedLength = this.getCheckedRows().length;
    this.isEnableEdit = checkedLength === 1;
    this.isEnableDelete = checkedLength > 0;
  }

  getCheckedRows() {

    return this.list.filter((item) => {
      return item.checked;
    });
  }
}
