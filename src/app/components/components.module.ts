import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgZorroAntdModule} from 'ng-zorro-antd';
import {HeaderComponent} from './header/header.component';
import {ReuseTabsComponent} from './reuse-tabs/reuse-tabs.component';
import {AsideComponent} from './aside/aside.component';

const components = [
  HeaderComponent,
  ReuseTabsComponent,
  AsideComponent
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
export class ComponentsModule {
}
