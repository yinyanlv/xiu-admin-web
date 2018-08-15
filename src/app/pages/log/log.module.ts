import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogComponent} from './log.component';
import {routing} from './log.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [LogComponent]
})
export class LogModule {
}
