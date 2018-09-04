import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'base-dialog-form',
  template: ''
})
export class BaseDialogFormComponent implements OnInit {

  form: FormGroup;
  isVisible: boolean = false;
  protected title: string = '';
  protected data: any = null;

  get dialogTitle(): string {
    return this.title;
  }

  @Input()
  data$: Observable<any>;

  @Output()
  onSaved: EventEmitter<any> = new EventEmitter<any>();

  constructor(
  ) {
  }

  ngOnInit() {

    this.data$.subscribe((data) => {
      this.isVisible = data.isVisible;
      this.initForm(data.data);
    });

    this.initForm(null);
  }

  initForm(data: any) {
  }

  handleOk(): void {
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  getParams() {
    return this.form.value;
  }

  protected updateFormControls() {

    Object.keys(this.form.controls).forEach((key) => {
      const control = this.form.get(key);

      control.markAsTouched();
      control.markAsDirty();
      control.updateValueAndValidity();
    });
  }

  checkErrorStyle(name: string): boolean {
    const control = this.form.get(name);

    return !!(control.touched && control.dirty && this.form.get(name).errors);
  }

  checkError(name: string, type: string): boolean {

    const control = this.form.get(name);

    return control.touched && control.dirty && control.hasError(type);
  }
}
