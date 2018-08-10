import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Form, Validators} from '@angular/forms';

import {EditService} from './edit.service';
import {SelectService} from '../../../services/SelectService';

@Component({
  selector: 'user-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [EditService]
})
export class EditComponent implements OnInit {

  @Input()
  isVisible: boolean;
  isCreateMode: boolean = true;
  roles: Array<any>;
  statuses: Array<any>;
  form: FormGroup;

  @Input()
  data: any;

  constructor(
    private fb: FormBuilder,
    private editService: EditService,
    private selectService: SelectService
  ) {
  }

  ngOnInit() {

    this.isCreateMode = this.data.model !== 'update';

    this.selectService.getUserRoles().subscribe((res: any) => {
      this.roles = res.data;
    });

    this.selectService.getUserStatuses().subscribe((res: any) => {
      this.statuses = res.data;
    });

    let initialData;

    if (this.isCreateMode || !this.data) {

      initialData = {
        username: [null, [Validators.required]],
        nickname: [null],
        password: [null, [Validators.required]],
        confirmPassword: [null, [Validators.required]],
        role: [null, [Validators.required]],
        status: [null, [Validators.required]],
        email: [null, [Validators.required]],
        phone: [null],
        qq: [null]
      };
    } else {

      let record = this.data.record;

      initialData = {
        id: [record.id, [Validators.required]],
        username: [record.username, [Validators.required]],
        nickname: [record.nickname],
        role: [record.role, [Validators.required]],
        status: [record.status, [Validators.required]],
        email: [record.email, [Validators.required]],
        phone: [record.phone],
        qq: [record.qq]
      };
    }

    this.form = this.fb.group(initialData);
  }

  handleOk(): void {

    debugger;
    if (this.form.valid) {

      let params = this.getParams();

      if (this.isCreateMode) {

        this.editService.create(params).subscribe((res) => {

        });
      } else {

        this.editService.update(params).subscribe((res) => {

        });
      }
    }
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  getParams() {

    return this.form.value;
  }
}
