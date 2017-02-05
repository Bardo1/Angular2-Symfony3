import { NgModule } from '@angular/core';
import { AuthModule } from './modules/auth.module';
import { Ng2TranslateModule } from './modules/ng2-translate.module';
import { ToastrModule } from './modules/toastr.module';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  imports: [
    AuthModule,
    Ng2TranslateModule,
    ToastrModule,
  ],
  providers: [
    AuthService,
    AuthGuardService
  ]
})

export class CommonModule {}