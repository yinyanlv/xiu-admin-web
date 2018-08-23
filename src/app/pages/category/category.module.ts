import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryComponent} from './category.component';
import {routing} from './category.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    CategoryComponent
  ]
})
export class CategoryModule {
}
