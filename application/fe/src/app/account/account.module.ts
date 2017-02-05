// NG-MODULES
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';

// MODULES
import { AccountRoutingModule } from './account-routing.module';

// COMPONENTS
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignOutComponent } from './components/sign-out/sign-out.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserListComponent } from './components/user-list/user-list.component';

// PROVIDERS
import { AuthTokenRepository } from './repositories/auth-token.repository';
import { UserRepository } from './repositories/user.repository';

@NgModule({
  imports: [
    FormsModule, 
    AccountRoutingModule
  ],
  declarations: [ 
    SignInComponent,
    SignOutComponent,
    SignUpComponent,
    UserListComponent
  ],
  providers : [
    AuthTokenRepository,
    UserRepository,
  ]
})

export class AccountModule { }
