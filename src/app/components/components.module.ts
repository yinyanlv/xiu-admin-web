import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {NgZorroAntdModule} from 'ng-zorro-antd';
import {HeaderComponent} from './header/header.component';
import {ReuseTabsComponent} from './reuse-tabs/reuse-tabs.component';
import {AsideComponent} from './aside/aside.component';
import {QueryComponent} from './query/query.component';
import {GridComponent} from './grid/grid.component';
import {EditComponent} from './edit/edit.component';

const components = [
  HeaderComponent,
  ReuseTabsComponent,
  AsideComponent,
  QueryComponent,
  GridComponent,
  EditComponent
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
