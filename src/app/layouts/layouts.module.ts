import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {DefaultLayoutComponent} from './default-layout/default-layout.component';
import {AuthLayoutComponent} from './auth-layout/auth-layout.component';
import {ComponentsModule} from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ],
  declarations: [
    DefaultLayoutComponent,
    AuthLayoutComponent
  ]
})
export class LayoutsModule {
}
