import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {CustomValidators} from 'ng2-validation';

import {EditService} from './edit.service';
import {SelectService} from '../../../services/select.service';
import {Observable} from 'rxjs';

const password = new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]);
const confirmPassword = new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(20), CustomValidators.equalTo(password)]);

@Component({
  selector: 'user-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [EditService],
  // changeDetection: ChangeDetectionStrategy.OnPush
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
      nickname: [null, [Validators.required]],
      password: password,
      confirmPassword: confirmPassword,
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
      nickname: [record.nickname, [Validators.required]],
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
    } else {

      Object.keys(this.form.controls).forEach((key) => {
        const control = this.form.get(key);

        control.markAsTouched();
        control.markAsDirty();
        control.updateValueAndValidity();
      });
    }
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  getParams() {

    return this.form.value;
  }

  isHasError(name: string): boolean {
    const control = this.form.get(name);

    return !!(control.touched && control.dirty && this.form.get(name).errors);
  }

  checkError(name: string, type: string): boolean {

    const control = this.form.get(name);

    return control.touched && control.dirty && control.hasError(type);
  }
}
