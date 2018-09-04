import {Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

import {GridService} from './grid.service';
import {Observable} from 'rxjs';
import {BaseGridComponent} from '../../../components/base-grid/base-grid.component';

@Component({
  selector: 'user-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['../../../components/base-grid/base-grid.component.scss'],
  providers: [
    GridService
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent extends  BaseGridComponent implements OnInit {

  isEnableModifyPassword: boolean = false;

  @Input()
  data$: Observable<any>;

  @Output()
  onCreate: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onUpdate: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  onModifyPassword: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private cdRef: ChangeDetectorRef,
    protected gridService: GridService
  ) {
    super(gridService);
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

  modifyPassword() {
    this.onModifyPassword.emit(this.getCheckedRows()[0].id);
  }

  refreshStatus() {
    super.refreshStatus();
    const checkedLength = this.getCheckedRows().length;
    this.isEnableModifyPassword = checkedLength === 1;
    setTimeout(() => {
      this.cdRef.detectChanges();
    });
  }
}
