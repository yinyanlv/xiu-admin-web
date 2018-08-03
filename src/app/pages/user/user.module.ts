import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgZorroAntdModule} from 'ng-zorro-antd';

import {routing} from './user.routing';
import {UserComponent} from './user.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    routing
  ],
  declarations: [
    UserComponent
  ]
})
export class UserModule {
}
