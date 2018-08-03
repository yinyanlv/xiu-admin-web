import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {NgZorroAntdModule} from 'ng-zorro-antd';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
