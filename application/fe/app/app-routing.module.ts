import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent }  from './ui/navbar/navbar.component';
import { HomeComponent }  from './ui/home/home.component';
import { DashboardComponent }  from './ui/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}