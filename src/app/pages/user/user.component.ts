import {Component, ComponentRef, OnInit, ViewChild} from '@angular/core';

import {Observable, Subject} from 'rxjs';
import {GridComponent} from './grid/grid.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  private gridSubject: Subject<any> = new Subject<any>();
  gridData$: Observable<any>;

  private editSubject: Subject<any> = new Subject<any>();
  editData$: Observable<any>;

  private modifyPasswordSubject: Subject<any> = new Subject<any>();
  modifyPassword$: Observable<any>;

  @ViewChild('grid', {read: GridComponent})
  grid: GridComponent;

  constructor(
  ) {
  }

  ngOnInit() {

    this.gridData$ = this.gridSubject.asObservable();
    this.editData$ = this.editSubject.asObservable();
    this.modifyPassword$ = this.modifyPasswordSubject.asObservable();
  }

  doQuery(filters) {

    this.gridSubject.next(filters);
  }

  createUser() {

    this.editSubject.next({
      isVisible: true,
      isCreateMode: true,
      data: null
    });
  }

  updateUser(data) {

    this.editSubject.next({
      isVisible: true,
      isCreateMode: false,
      data: data
    });
  }

  modifyPassoword(data) {
    this.modifyPasswordSubject.next({
      isVisible: true,
      data: data
    });
  }

  saved(data) {
    if (data.success) {

      this.grid.doQuery();
    }
  }

  modifiedPassword(data) {
    if (data.success) {

      this.grid.doQuery();
    }
  }
}
