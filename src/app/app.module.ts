import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

import {AppComponent} from './app.component';
import {LayoutsModule} from './layouts/layouts.module';
import {routing} from './app.routing';
import {NotFoundComponent} from './pages/not-found/not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    LayoutsModule,
    routing
  ],
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  providers: [{
    provide: NZ_I18N,
    useValue: zh_CN
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
