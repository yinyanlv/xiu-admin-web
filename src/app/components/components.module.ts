import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgZorroAntdModule} from 'ng-zorro-antd';
import { HeaderComponent } from './header/header.component';
import { ReuseTabsComponent } from './reuse-tabs/reuse-tabs.component';

const components = [
  HeaderComponent,
  ReuseTabsComponent
];

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ]
})
export class ComponentsModule { }
