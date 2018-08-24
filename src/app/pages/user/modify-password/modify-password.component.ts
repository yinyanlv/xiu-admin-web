import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {ModifyPasswordService} from './modify-password.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'user-modify-password',
  templateUrl: './modify-password.component.html',
  styleUrls: ['./modify-password.component.scss'],
  providers: [
    ModifyPasswordService
  ]
})
export class ModifyPasswordComponent implements OnInit {

  form: FormGroup;
  isVisible: boolean = false;

  @Input()
  data$: Observable<any>;

  @Output()
  onSaved: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private modifyPasswordService: ModifyPasswordService
  ) {
  }

  ngOnInit() {

    this.data$.subscribe((data) => {
      this.isVisible = data.isVisible;
      this.initForm(data.data);
    });
    this.initForm(null);
  }

  initForm(userId: any) {

    this.form = this.fb.group({
      id: [userId],
      oldPassword: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirmPassword: [null, [this.confirmValidator.bind(this)]],
    });
  }

  checkConfirm() {
    Promise.resolve().then(() => this.form.get('confirmPassword').updateValueAndValidity());
  }

  confirmValidator(control: FormControl): {[key: string]: boolean} {
    const value = control.value;

    if (!value) {
      return {
        required: true
      };
    } else if (value.length < 6) {
      return {
        minlength: true
      };
    } else if (value.length > 20) {
      return {
        maxlength: true
      };
    } else if (value !== this.form.get('password').value) {
      return {
        confirm: true
      };
    }
  }

  handleOk(): void {

    if (this.form.valid) {

      const params = this.getParams();

      this.modifyPasswordService.modify(params).subscribe((res) => {

        if (res.success) {
          this.isVisible = false;
          this.onSaved.emit({
            success: true
          });
          this.modifyPasswordService.showSuccess(res.data);
        } else {
          const control = this.form.get('oldPassword');
          control.setErrors({
            invalid: true
          });
          control.markAsDirty();
        }
      });
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
