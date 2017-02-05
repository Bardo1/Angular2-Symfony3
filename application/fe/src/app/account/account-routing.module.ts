import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../common/services/auth-guard.service';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignOutComponent } from './components/sign-out/sign-out.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  {
    path: 'account/sign-in',
    component: SignInComponent,
  },
  {
    path: 'account/sign-out',
    component: SignOutComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'account/sign-up',
    component: SignUpComponent
  },
  {
    path: 'account/user-list',
    component: UserListComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AccountRoutingModule {}