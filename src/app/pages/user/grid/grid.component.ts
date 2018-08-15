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
  isShowEdit: boolean = false;
  isShowDelete: boolean = false;
  isLoading: boolean = false;
  pageIndex: number = 1;
  size: number = 10;
  total: number = 0;
  data: any;
  list: Array<any> = [];
  private sorts: Array<any> = [];
  private filters: Array<any> = [];

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
    this.cdRef.detectChanges();

    this.gridService.queryPage(params).subscribe((res) => {

      this.data = res;
      this.list = res.list || [];
      this.total = res.total || 0;

      this.refreshStatus();
    }, (res: any) => {
      this.gridService.showError(res.message);
    }, () => {
      this.isLoading = false;
      this.cdRef.detectChanges();
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
    this.isShowEdit = checkedLength === 1;
    this.isShowDelete = checkedLength > 0;

    setTimeout(() => {
      this.cdRef.detectChanges();
    });
  }

  getCheckedRows() {

    return this.list.filter((item) => {
      return item.checked;
    });
  }
}
