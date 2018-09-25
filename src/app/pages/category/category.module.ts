import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryComponent} from './category.component';
import {routing} from './category.routing';
import { EditComponent } from './edit/edit.component';
import { QueryComponent } from './query/query.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    CategoryComponent,
    EditComponent,
    QueryComponent,
    GridComponent
  ]
})
export class CategoryModule {
}
