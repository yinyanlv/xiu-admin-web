import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LogComponent} from './log.component';

const routes: Routes = [{
  path: '',
  component: LogComponent
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
