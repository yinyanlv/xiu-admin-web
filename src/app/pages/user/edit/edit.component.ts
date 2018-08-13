import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup, FormBuilder, Form, Validators} from '@angular/forms';

import {EditService} from './edit.service';
import {SelectService} from '../../../services/SelectService';
import {Observable} from 'rxjs';

@Component({
  selector: 'user-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [EditService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditComponent implements OnInit {

  roles: Array<any>;
  statuses: Array<any>;
  form: FormGroup;
  isVisible: boolean = false;
  isCreateMode: boolean = true;
  private data: any = null;

  get title() {
    return this.isCreateMode ? '新建用户' : '修改用户';
  }

  @Input()
  data$: Observable<any>;

  @Output()
  onSaved: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private cdRef: ChangeDetectorRef,
    private editService: EditService,
    private selectService: SelectService
  ) {
  }

  ngOnInit() {

    this.selectService.getUserRoles().subscribe((res: any) => {
      this.roles = res.data;
    });

    this.selectService.getUserStatuses().subscribe((res: any) => {
      this.statuses = res.data;
    });

    this.data$.subscribe((data) => {
      this.isVisible = data.isVisible;
      this.isCreateMode = data.isCreateMode;
      this.data = data.data;

      if (this.isCreateMode) {
        this.initCreateForm();
      } else {
        this.initUpdateForm();
      }

      this.cdRef.detectChanges();
    });

    this.initCreateForm();
  }

  initCreateForm() {

    this.form = this.fb.group({
      username: [null, [Validators.required]],
      nickname: [null],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
      role: [null, [Validators.required]],
      status: [null, [Validators.required]],
      email: [null, [Validators.required]],
      phone: [null],
      qq: [null]
    });
  }

  initUpdateForm() {
    const record = this.data;

    this.form = this.fb.group({
      id: [record.id, [Validators.required]],
      username: [record.username, [Validators.required]],
      nickname: [record.nickname],
      role: [record.role, [Validators.required]],
      status: [record.status, [Validators.required]],
      email: [record.email, [Validators.required]],
      phone: [record.phone],
      qq: [record.qq]
    });
  }

  handleOk(): void {

    if (this.form.valid) {

      const params = this.getParams();

      if (this.isCreateMode) {

        this.editService.create(params).subscribe((res) => {

          this.isVisible = false;

          this.onSaved.emit({
            success: true
          });
        });
      } else {

        this.editService.update(params).subscribe((res) => {

          this.isVisible = false;
          this.onSaved.emit({
            success: true
          });
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
