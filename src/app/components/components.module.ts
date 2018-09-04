import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {NgZorroAntdModule} from 'ng-zorro-antd';
import {HeaderComponent} from './header/header.component';
import {ReuseTabsComponent} from './reuse-tabs/reuse-tabs.component';
import {AsideComponent} from './aside/aside.component';
import {BaseQueryComponent} from './base-query/base-query.component';
import {BaseGridComponent} from './base-grid/base-grid.component';
import {BaseEditComponent} from './base-edit/base-edit.component';
import {BaseDialogFormComponent} from './base-dialog-form/base-dialog-form.component';

const components = [
  HeaderComponent,
  ReuseTabsComponent,
  AsideComponent,
  BaseQueryComponent,
  BaseGridComponent,
  BaseDialogFormComponent,
  BaseEditComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ]
})
export class ComponentsModule {
}
