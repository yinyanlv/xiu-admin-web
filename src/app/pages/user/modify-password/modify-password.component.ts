import {Component, OnInit} from '@angular/core';
import {FormControl, FormBuilder, Validators} from '@angular/forms';
import {ModifyPasswordService} from './modify-password.service';
import {BaseDialogFormComponent} from '../../../components/base-dialog-form/base-dialog-form.component';

@Component({
  selector: 'user-modify-password',
  templateUrl: './modify-password.component.html',
  styleUrls: ['./modify-password.component.scss'],
  providers: [
    ModifyPasswordService
  ]
})
export class ModifyPasswordComponent extends BaseDialogFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private modifyPasswordService: ModifyPasswordService
  ) {
    super();
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

  confirmValidator(control: FormControl): { [key: string]: boolean } {
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

      this.updateFormControls();
    }
  }
}
