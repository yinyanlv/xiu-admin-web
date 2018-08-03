import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {routing} from './analysis.routing';
import {AnalysisComponent} from './analysis.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [AnalysisComponent]
})
export class AnalysisModule {
}
