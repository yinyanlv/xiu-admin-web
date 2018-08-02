import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';
import {DefaultLayoutComponent} from './layouts/default-layout/default-layout.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: DefaultLayoutComponent,
  children: [{
    path: '',
    loadChildren: './pages/home/home.module#HomeModule'
  }]
}, {
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: 'login',
    loadChildren: './pages/login/login.module#LoginModule'
  }, {
    path: '**',
    component: NotFoundComponent
  }]
}];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
  useHash: false
});
