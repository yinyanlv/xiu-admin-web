import {Component, OnInit} from '@angular/core';

import {UserService} from './user.service';
import {getPagination, getQueryParams, getSorts} from '../../common/utils';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  gridData: any = {
    list: [],
    total: 0
  };
  isEditVisible: boolean = false;
  editData: any = {};

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit() {

  }

  doQuery(filters) {
    let params = getQueryParams(filters, getSorts(), getPagination(1));

    this.userService.queryPage(params).subscribe((res) => {
      this.gridData = res;
    }, (res: any) => {
      this.userService.showError(res.message);
    });
  }

  createUser() {

    this.editData = {
      mode: 'create'
    };

    this.isEditVisible = true;
  }

  updateUser() {

    this.editData = {
      model: 'update',
      record: {}
    };
    this.isEditVisible = true;
  }
}
