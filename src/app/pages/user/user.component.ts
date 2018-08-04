import { Component, OnInit } from '@angular/core';

import {UserService} from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  isVisible: boolean = false;
  data: Array<any> = [];

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getUsers().subscribe((res) => {
      console.log(res);
    });
  }

  createUser() {
    this.isVisible = !this.isVisible;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
