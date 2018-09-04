import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

import {EditService} from './edit.service';
import {SelectService} from '../../../services/select.service';
import {USERNAME_REGEX, EMAIL_REGEX, PHONE_REGEX, QQ_REGEX} from '../../../common/regex';
import {BaseEditComponent} from '../../../components/base-edit/base-edit.component';

@Component({
  selector: 'user-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [EditService]
})
export class EditComponent extends BaseEditComponent implements OnInit {

  protected title: string = '用户';
  roles: Array<any>;
  statuses: Array<any>;

  @Input()
  data$: Observable<any>;

  @Output()
  onSaved: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    protected cdRef: ChangeDetectorRef,
    protected editService: EditService,
    private fb: FormBuilder,
    private selectService: SelectService
  ) {
    super(cdRef, editService);
  }

  ngOnInit() {

    this.selectService.getUserRoles().subscribe((res: any) => {
      this.roles = res.data;
    });

    this.selectService.getUserStatuses().subscribe((res: any) => {
      this.statuses = res.data;
    });
    super.ngOnInit();
  }

  initCreateForm() {

    this.form = this.fb.group({
      username: [null, [Validators.required, Validators.pattern(USERNAME_REGEX)]],
      nickname: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      confirmPassword: [null, [this.confirmValidator.bind(this)]],
      role: [null, [Validators.required]],
      status: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern(EMAIL_REGEX)]],
      phone: [null, [Validators.pattern(PHONE_REGEX)]],
      qq: [null, [Validators.pattern(QQ_REGEX)]]
    });
  }

  initUpdateForm() {
    const record = this.data;

    this.form = this.fb.group({
      id: [record.id, [Validators.required, Validators.pattern(USERNAME_REGEX)]],
      username: [record.username, [Validators.required]],
      nickname: [record.nickname, [Validators.required]],
      role: [record.role, [Validators.required]],
      status: [record.status, [Validators.required]],
      email: [record.email, [Validators.required, Validators.pattern(EMAIL_REGEX)]],
      phone: [record.phone, [Validators.pattern(PHONE_REGEX)]],
      qq: [record.qq, [Validators.pattern(QQ_REGEX)]]
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
}
