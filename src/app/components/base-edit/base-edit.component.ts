import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';

import {BaseEditService} from './base-edit.service';
import {BaseDialogFormComponent} from '../base-dialog-form/base-dialog-form.component';

@Component({
  selector: 'base-edit',
  template: ''
})
export class BaseEditComponent extends BaseDialogFormComponent implements OnInit {

  isCreateMode: boolean = true;

  get dialogTitle(): string {
    return this.getTitlePrefix() + this.title;
  }

  constructor(
    protected cdRef: ChangeDetectorRef,
    protected editService: BaseEditService
  ) {
    super();
  }

  ngOnInit() {

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

  protected getTitlePrefix(): string {
    return this.isCreateMode ? '新建' : '修改';
  }

  initCreateForm() {
  }

  initUpdateForm() {
  }

  handleOk(): void {

    if (this.form.valid) {

      const params = this.getParams();

      if (this.isCreateMode) {

        this.editService.create(params).subscribe((res) => {

          if (res.success) {
            this.isVisible = false;
            this.onSaved.emit({
              success: true
            });
            this.editService.showSuccess(res.data);
          } else {
            this.editService.showError(res.message);
          }
        });
      } else {

        this.editService.update(params).subscribe((res) => {

          if (res.success) {
            this.isVisible = false;
            this.onSaved.emit({
              success: true
            });
            this.editService.showSuccess(res.data);
          } else {
            this.editService.showError(res.message);
          }
        });
      }
    } else {

      this.updateFormControls();
    }
  }
}
