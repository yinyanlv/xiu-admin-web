import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import zh from '@angular/common/locales/zh';

import {AppComponent} from './app.component';
import {LayoutsModule} from './layouts/layouts.module';
import {routing} from './app.routing';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {SelectService} from './services/SelectService';

registerLocaleData(zh);

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
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
    },
    SelectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
