import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  isVisible: boolean = false;
  data: Array<any> = [];

  constructor() { }

  ngOnInit() {
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
