import {Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, NgZone} from '@angular/core';
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
  size: number = 20;
  data: any;
  list: Array<any> = [];

  @Input()
  data$: Observable<any>;

  @Output()
  onCreate: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onUpdate: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private ngZone: NgZone,
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

    const params = getQueryParams(filters, getSorts(), getPagination(1));

    this.isLoading = true;
    this.cdRef.detectChanges();

    this.gridService.queryPage(params).subscribe((res) => {

      this.data = res;
      this.list = res.list || [];

      this.refreshStatus();
    }, (res: any) => {
      this.gridService.showError(res.message);
    }, () => {
      this.isLoading = false;
    });
  }

  sortChange(sorts) {

    console.log(sorts);
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

    this.gridService.delete(ids).subscribe(() => {
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
    }, 0);
  }

  getCheckedRows() {

    return this.list.filter((item) => {
      return item.checked;
    });
  }
}
