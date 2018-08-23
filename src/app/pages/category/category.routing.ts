import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CategoryComponent} from './category.component';

const routes: Routes = [{
  path: '',
  component: CategoryComponent
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
