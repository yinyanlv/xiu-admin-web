import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';

import {ComponentsModule} from '../../components/components.module';
import {routing} from './user.routing';
import {UserComponent} from './user.component';
import {UserQueryComponent} from './query/query.component';
import {GridComponent} from './grid/grid.component';
import {EditComponent} from './edit/edit.component';
import {ModifyPasswordComponent} from './modify-password/modify-password.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    ComponentsModule,
    routing
  ],
  declarations: [
    UserComponent,
    UserQueryComponent,
    GridComponent,
    EditComponent,
    ModifyPasswordComponent
  ]
})
export class UserModule {
}
